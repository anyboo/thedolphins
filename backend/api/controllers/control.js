'use strict'
var parse = require('co-body')
var uploadparse = require('co-busboy')
var monk = require('monk')
var wrap = require('co-monk')
var db = monk('localhost/luban')
var fs = require('fs')
var Buffer = require('buffer').Buffer

/*
var co = require('co')
var os = require('os')
*/
var path = require('path')

function changeModelId(model) {
    for (var item in model) {
        if (typeof item == 'string') {
            if (item.indexOf('_id') >= 0) {
                try {
                    let monkid = monk.id(model[item])
                    model[item] = monkid
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}

module.exports.login = function* login(next) {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '500kb'
    })
    console.log(model)
    this.body = {
        token: '123'
    }
}
module.exports.all = function* all(name, next) {
    if ('GET' != this.method) return yield next
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
    console.log(findObj, name)
    let table = wrap(db.get(name))
    console.log('yield', table)
    let count = yield table.count(findObj)
    console.log(options, name)
    options.push({ '$match': findObj })
    options.push({ '$sort': { '_id': -1 } })
    options.push({ '$skip': skip })
    options.push({ '$limit': limit })
    console.log(options, name)
    let data = yield table.aggregate(options)
    this.body = yield {
        'data': data,
        'count': count,
        'name': name
    }
}

module.exports.allold = function* allold(name, next) {
    if ('GET' != this.method) return yield next
    let query = this.query
    let limit = Number.parseInt(query.prepage || 30)
    let skip = Number.parseInt(query.page || 0) * limit
    let filter = query.filter
    let findObj = {}
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
                    } else {
                        findObj[key] = value
                    }

                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    console.log(findObj)
    var dbtable = wrap(db.get(name))
    let count = yield dbtable.count(findObj)
    let data = yield dbtable.find(findObj, {
        'skip': skip,
        'limit': limit,
        'sort': { '_id': -1 }
    })
    this.body = yield {
        'data': data,
        'count': count,
        'name': name
    }
}

module.exports.upload = function* upload(next) {
    if ('POST' != this.method) return yield next
    if (!this.request.is('multipart/*')) return yield next

    var parts = uploadparse(this)
    var part

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
        //if (id === "" + parseInt(id, 10)) {
    var model = yield wrap(db.get(name)).find({ '_id': monk.id(id) })
    if (model.length === 0) {
        this.throw(404, 'model with _id = ' + id + ' was not found')
    }
    this.body = yield model
}

module.exports.add = function* add(name, next) {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '500kb'
    })
    console.log(model)
    changeModelId(model)
    let seqid = yield wrap(db.get('lb_seq_id')).findOneAndUpdate({ id: name }, { $inc: { seq: 1 } }, { upsert: true })
    model.lbseqid = seqid.seq
    console.log(model)
    var inserted = yield wrap(db.get(name)).insert(model)
    if (!inserted) {
        this.throw(405, 'The model couldn\'t be added.')
    }
    this.body = yield model
}

module.exports.modify = function* modify(name, id, next) {
    if ('PUT' != this.method) return yield next

    var data = yield parse(this, {
        limit: '500kb'
    })

    var model = yield wrap(db.get(name)).find({ '_id': monk.id(id) })

    if (model.length === 0) {
        this.throw(404, 'model with _id = ' + id + ' was not found')
    }
    changeModelId(data)
    var updated = yield wrap(db.get(name)).update(model[0], {
        $set: data
    })

    if (!updated) {
        this.throw(405, 'Unable to update.')
    } else {
        this.body = yield data
    }
}

module.exports.remove = function* remove(name, id, next) {
    if ('DELETE' != this.method) return yield next

    var model = yield wrap(db.get(name)).find({ '_id': monk.id(id) })

    if (model.length === 0) {
        this.throw(404, 'model with _id = ' + id + ' was not found')
    }

    var removed = yield wrap(db.get(name)).remove(model[0])

    if (!removed) {
        this.throw(405, 'Unable to delete.')
    } else {
        this.body = '{"success":1}'
    }

}

module.exports.head = function*() {
    return yield
}

module.exports.options = function*() {
    this.body = yield 'Allow: HEAD,GET,PUT,DELETE,OPTIONS'
}

module.exports.trace = function*() {
    this.body = yield 'Smart! But you can\'t trace.'
}
