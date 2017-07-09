//文件管理
import env from './env.js'
import fs from 'fs'
import path from 'path'
import events from 'events'

//file:目录清单
class FileManage extends events {
    constructor() {
        super()
        this.files = []
        this.fileContent = []
        let pwd = env.workPath
        this.readdir(pwd).then(() => {
            this.readFileList().then(() => {
                this.emit('ready')
            })
        })
    }
    toString() {
        console.log(this.fileContent)
    }
    readFileList() {
        let promises = this.files.map(item => {
            return this.readFile(item)
        })
        return Promise.all(promises)
    }
    readFile(pwd) {
        return new Promise((resolve) => {
            fs.readFile(pwd, (err, data) => {
                if (err) throw err
                let fileItem = {}
                fileItem.path = pwd
                fileItem.data = data
                this.fileContent.push(fileItem)
                resolve()
            })
        })
    }
    readdir(pwd) {
        return new Promise((resolve) => {
            fs.readdir(pwd, (err, files) => {
                let promises = files.map(item => {
                    let itempath = path.join(pwd, item)
                    return this.lstat(itempath)
                })

                Promise.all(promises).then(() => {
                    resolve()
                })
            })
        })
    }
    lstat(pwd) {
        return new Promise((resolve) => {
            fs.lstat(pwd, (err, stats) => {
                if (pwd.charAt(0) == '.') {
                    console.log(pwd)
                    resolve()
                } else if (stats.isFile()) {
                    let extName = path.extname(pwd)
                    if (env.filterFile.includes(extName)) {
                        this.files.push(pwd)
                    }
                    resolve()
                } else if (stats.isDirectory()) {
                    this.readdir(pwd).then(() => {
                        resolve()
                    })
                }

            })
        })
    }
}

export default new FileManage()
