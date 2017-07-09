class CssParser {
    constructor() {
        this.cssRules = {}
        this.comment = 0
        this.ruleFalg = []
    }
    toString() {

    }
    addRule() {

    }
    parser(content) {
        for (var i = 0, il = content.length; i < il; i++) {
            let ch = content.charAt(i)
            let ch2 = i < il - 1 ? content.charAt(i + 1) : ''
            if (!this.ruleFalg.length)
                this.ruleFalg.push(i)
            switch (ch) {
            case '/':
                if (!this.comment && ch2 == '*') {
                    this.comment++
                }
                break
            case '*':
                if (ch2 == '/') {
                    this.comment--
                }
                break
            case '{':
                if (!this.comment) {
                    this.ruleFalg.push(i)
                }
                break
            case '}':
                if (!this.comment) {
                    this.ruleFalg.push(i)
                    if (this.ruleFalg.length == 3) {
                        console.log(this.ruleFalg)
                    } else {
                        this.ruleFalg = []
                    }
                }
                break
            }
        }
    }
}

export default new CssParser()
