//bullstech 数据行
class bt_datarow {
    constructor() {
        this.rows = {}
    }
}
//bullstech 数据列
class bt_datacol {
    constructor() {
        this.cols = {}
    }
}
//bullstech 数据表
class bt_datatable {
    constructor() { //构造函数
        this.row = new bt_datarow()
        this.col = new bt_datacol()
    }
}
//bullstech 数据源
class bt_datasource {
    constructor() { //构造函数
        this.tables = {} //列表
    }
}

export class ds extend bt_datasource {

}
