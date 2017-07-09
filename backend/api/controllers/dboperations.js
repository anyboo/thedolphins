'use strict'
var parse = require('co-body')
var uploadparse = require('co-busboy')
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID
const jwt = require('jsonwebtoken')
var fs = require('fs')
var Buffer = require('buffer').Buffer
var path = require('path')

var dbstr = 'mongodb://localhost/luban'

function checkId(id) {
    let result = false
    if (id && (id.length == 12 || id.length == 24)) {
        result = true
    }
    return result
}
module.exports.login = function* login(next) {
    if ('POST' != this.method) return yield next
    var user = yield parse(this, {
        limit: '500kb'
    })
    console.log(user)
    var db = yield MongoClient.connect(dbstr)
    let table = db.collection('employee')
    var model = yield table.find({
        'pwd': user.pwd,
        'tel': user.user,
        'lock': false
    }).toArray()
    var token = ''
    var code = -1
    var message = '登录失败'
    var account = {}
    if (model.length > 0) {
        var profile = {
            user: user.user,
            id: model[0]._id
        }
        account = model[0]
        account.pwd = null
        delete account.pwd
        token = jwt.sign(profile, 'luban', { expiresIn: 60 * 60 * 24 * 3 /* 1 days */ })
        code = 0
        message = '登录成功'
    } else {
        var profile = {
            user: user.user,
            id: 0
        }

        if (user.user == 'luban' && user.pwd == 'e10adc3949ba59abbe56e057f20f883e') {
            token = jwt.sign(profile, 'luban', { expiresIn: 60 * 60 * 24 * 3 /* 1 days */ })
            code = 0
            message = '登录成功'
            account.name = 'luban'
            account._id = 0
            account.tel = 'luban'
        }
    }
    db.close()
    let nowtime = new Date().getTime() / 1000
    this.body = {
        code,
        token,
        message,
        account,
        nowtime
    }
}

function changeModelId(model) {
    for (var item in model) {
        if (typeof item == 'string') {
            if (item.indexOf('_id') >= 0) {
                try {
                    console.log('-----', item, model[item])
                    if (checkId(model[item])) {
                        let monkid = ObjectID(model[item])
                        model[item] = monkid
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}

function verify(token, authtime) {
    let result = false
    console.log(token, authtime)
    if (token) {
        try {
            var profile = jwt.verify(token, 'luban')
            let nowtime = new Date().getTime() / 1000
            let authtimebegin = authtime - 60 * 15
            let authtimeend = authtime + 60 * 15
            console.log(profile, nowtime)
            if (authtimebegin < nowtime && nowtime < authtimeend) {
                result = true
            }
        } catch (e) {
            console.log(e)
        }
    }
    return result
}
module.exports.all = function* all(name, next) {
    if ('GET' != this.method) return yield next
    let token = this.req.headers.authorization
    let authtime = this.req.headers.authtime
    if (!verify(token, authtime)) {
        this.status = 401
        this.body = 'Access Forbidden'
        return
    }
    var db = yield MongoClient.connect(dbstr)
    let table = db.collection(name)
    let query = this.query
    let limit = Number.parseInt(query.prepage || 30)
    let skip = Number.parseInt(query.page || 0) * limit
    let filter = query.filter
    let findObj = {}
    let options = []
    console.log(filter)
    if (filter) {
        try {
            let filterObj = JSON.parse(Buffer.from(filter, 'base64').toString())
            if (filterObj) {
                for (var item of filterObj) {
                    let value = item.value
                    let type = item.type
                    let key = item.key
                    if (type == 'like') {
                        let like = new RegExp(value)
                        findObj[key] = like
                    } else if (type == 'lookup') {
                        options.push({ '$lookup': value })
                    } else if (type == 'lt') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$lt'] = value
                        console.log(findObj[key])
                    } else if (type == 'gt') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$gt'] = value
                        console.log(findObj[key])
                    } else if (type == 'lte') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$lte'] = value
                        console.log(findObj[key])
                    } else if (type == 'gte') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$gte'] = value
                        console.log(findObj[key])
                    } else {
                        findObj[key] = value
                    }

                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    changeModelId(findObj)
    let count = yield table.count(findObj)
    options.push({ '$match': findObj })
    options.push({ '$sort': { '_id': -1 } })
    options.push({ '$skip': skip })
    options.push({ '$limit': limit })
    console.log(options, name, count)
    let cursor = table.aggregate(options)
    let data = yield cursor.toArray()
    db.close()
    let nowtime = new Date().getTime() / 1000
    this.body = yield {
        'data': data,
        'count': count,
        'name': name,
        'nowtime': nowtime
    }

}
module.exports.upload = function* upload(next) {
    if ('POST' != this.method) return yield next
    if (!this.request.is('multipart/*')) return yield next

    var parts = uploadparse(this)

    while ((part = yield parts)) {
        var ext = path.extname(part.filename)
        var filename = parseInt(Math.random() * 100) + Date.parse(new Date()).toString() + ext
        var newPath = path.resolve('public/upload', filename)
        var stream = fs.createWriteStream(newPath)
        part.pipe(stream)
        console.log('uploading %s -> %s', part.filename, stream.path)
    }

    this.body = yield { success: 1, name: filename, url: 'http://www.bullstech.cn:9999/upload/' + filename }
}

module.exports.fetch = function* fetch(name, id, next) {
    if ('GET' != this.method) return yield next
    if (!checkId(id)) return yield next
    var db = yield MongoClient.connect(dbstr)
    let table = db.collection(name)
    var model = yield table.find({ '_id': ObjectID(id) }).toArray()
    if (model.length === 0) {
        this.throw(404, 'model with _id = ' + id + ' was not found')
    }
    db.close()
    this.body = yield model
}

module.exports.add = function* add(name, next) {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '500kb'
    })
    var db = yield MongoClient.connect(dbstr)
    let table = db.collection(name)
    let seqid = yield db.collection('lb_seq_id').findOneAndUpdate({ id: name }, { $inc: { seq: 1 } }, { upsert: true })
    model.lbseqid = seqid.seq
    console.log(model)
    var inserted = yield table.insert(model)
    if (!inserted) {
        this.throw(405, 'The model couldn\'t be added.')
    }
    db.close()
    this.body = yield model
}

module.exports.modify = function* modify(name, id, next) {
    if ('PUT' != this.method) return yield next
    if (!checkId(id)) return yield next
    var data = yield parse(this, {
        limit: '500kb'
    })
    var db = yield MongoClient.connect(dbstr)
    let table = db.collection(name)
    changeModelId(data)
    var result = yield table.updateOne({ '_id': ObjectID(id) }, {
        $set: data
    })
    db.close()
    this.body = result
}

module.exports.remove = function* remove(name, id, next) {
    if ('DELETE' != this.method) return yield next
    if (!checkId(id)) return yield next
    var db = yield MongoClient.connect(dbstr)
    let table = db.collection(name)
    var removed = yield table.remove({ '_id': ObjectID(id) })
    db.close()
    if (!removed) {
        this.throw(405, 'Unable to delete.')
    } else {
        this.body = '{"success":1}'
    }

}

module.exports.head = function* () {
    return yield
}

module.exports.options = function* () {
    this.set('Access-Control-Allow-Method', 'HEAD,GET,PUT,DELETE,OPTIONS')
    this.set('Access-Control-Allow-Origin', '*')
    this.status = 204
    this.body = yield 'Allow: HEAD,GET,PUT,DELETE,OPTIONS'
}

module.exports.trace = function* () {
    this.body = yield 'Smart! But you can\'t trace.'
}
