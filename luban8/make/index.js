import filemanage from './filemanage.js'

class Make {
    main() {
        filemanage.on('ready', () => {
            filemanage.toString()
        })
    }
}

export default new Make()
