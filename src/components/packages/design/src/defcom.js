//bullstech 基本数据结构
class bt_obj {
    constructor(name) { //构造函数
        this.name = "" //页面名称
        this.objectlist = {} //对象列表
        this.type = "bt_obj"
    }
}

//page页面
class bt_page extend bt_obj {
    constructor() {
        this.type = "bt_page"
    }
}

//row组件
class bt_row extend bt_obj {
    constructor() {
        this.type = "bt_row"
    }
}

//col组件
class bt_col extend bt_obj {
    constructor() {
        this.type = "bt_col"
    }
}

//table表格组件
class bt_table extend bt_obj {
    constructor() {
        this.type = "bt_table"
    }
}

//property属性
class bt_property extend bt_obj {
    constructor() {
        this.type = "bt_property"
    }
}

//导出简写对象
export class p extend bt_page {

}
export class r extend bt_row {

}
export class c extend bt_col {

}
export class t extend bt_table {

}
export class pp extend bt_property {

}
