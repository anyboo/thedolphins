//环境变量
import process from 'process'
import config from './config.js'
//processPath:当前程序路径
//workPath:工作目录
//filterFile:过滤文件
class Env {
    constructor() {
        this.processPath = process.cwd()
        Object.assign(this, config)
        this.workPath = this.processPath + this.workPath
    }
    toString() {
        Object.getOwnPropertyNames(this).forEach((key) => {
            console.log(key, this[key])
        })
    }
}
var env = new Env()
export default env
