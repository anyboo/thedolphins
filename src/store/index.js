import Vue from 'vue'
import Vuex from 'vuex'
//import * as actions from './actions'
//import * as getters from './getters'
import model from './modules/model'
import lodash from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        designitem: {
            id: 1, //id编号,根目录为id=0
            pid: 0, //父类id编号
            index: 0, //排序,插入的时候默认为当前ID编号
            name: '', //控件名称
            component: '', //控件标签名称
            componentdata: {}, //控件属性值
            active: false, //是否当前选中
            haveactive: false, //是否包含选中
            dragenter: false, //是否拖拉
            real: false //是否真实组件
        },
        design: [], //控件列表
        designid: '', //当前设计的编号
        designChange: false, //是否有变动
        maxid: 100, //控件最大ID              
        dragenterArray: [], //拖拉数据,进出堆栈
        dragenterCol: 0 //选择控件
    },
    mutations: {
        designInit: (state) => {
            state.design = []
            state.designChange = false
        },
        designPush: (state, obj) => {
            state.design.push(obj)
            if (state.design.length > 1) {
                state.designChange = true
            }
        },
        designEdit: (state, { id, pid }) => {
            state.designChange = true
            let designitem = lodash.find(state.design, {
                'id': Number(id)
            })
            designitem.pid = pid
        },
        designCopy: (state, { id, pid }) => {
            state.designChange = true
            let designitem = lodash.find(state.design, {
                'id': Number(id)
            })
            state.maxid += 100
            let designitemcopy = lodash.cloneDeep(designitem)
            designitemcopy.id = state.maxid
            designitemcopy.index = state.maxid
            designitemcopy.pid = pid
            let clientid = state.maxid

            function designCloneDeep(design, id, pid) {
                let designArray = lodash.filter(design, function(o) {
                    return Math.floor(id / 100) == Math.floor(o.pid / 100)
                })
                designArray.forEach(item => {
                    let itemcopy = lodash.cloneDeep(item)
                    let oldid = itemcopy.id
                    let oldpid = itemcopy.pid
                    clientid += 100
                    let tempid = clientid
                    itemcopy.id = tempid
                    itemcopy.index = tempid
                    itemcopy.pid = pid + oldpid % 100
                    design.push(itemcopy)
                    designCloneDeep(design, oldid, tempid)
                })
            }
            designCloneDeep(state.design, Number(id), state.maxid)

            state.design.push(designitemcopy)
        },
        componentColChange: (state, { id }) => {
            state.dragenterCol = id
            lodash.map(state.design, function(o) {
                o.active = false
                o.haveactive = false
                o.dragenter = false
            })
        },
        componentStatusChange: (state, { id, status }) => {
            if (id == 0) {
                state.dragenterCol = 0
            }
            lodash.map(state.design, function(o) {
                o.active = false
                o.haveactive = false
                o.dragenter = false
            })
            let idtemp = Math.floor(id / 100) * 100

            let designitem = lodash.find(state.design, {
                'id': Number(idtemp)
            })

            function designChange(design, pid, field, value) {
                if (pid > 0) {
                    let designArray = lodash.filter(design, function(o) {
                        return Math.floor(pid / 100) == Math.floor(o.id / 100)
                    })
                    designArray.forEach(item => {
                        item[field] = value
                        let pidtemp = Math.floor(item.pid / 100) * 100
                        designChange(design, pidtemp, field, value)
                    })
                }
            }
            if (designitem) {
                if (lodash.isBoolean(status.dragenter)) {
                    if (status.dragenter) {
                        state.dragenterArray.push(id)
                    } else {
                        lodash.remove(state.dragenterArray, n => {
                            return n == id
                        })
                    }
                    if (lodash.size(state.dragenterArray) > 0) {
                        let headidtemp = lodash.head(state.dragenterArray)
                        let headidfloor = Math.floor(headidtemp / 100) * 100
                        designitem = lodash.find(state.design, {
                            'id': Number(headidfloor)
                        })
                        if (designitem) {
                            state.dragenterCol = headidtemp
                            designitem.dragenter = true
                            let pidtemp = Math.floor(designitem.pid / 100) * 100
                            designChange(state.design, pidtemp, 'dragenter', true)
                        }
                    } else {
                        if (status.dragenter) {
                            state.dragenterCol = id
                        } else {
                            state.dragenterCol = 0
                        }

                        designitem.dragenter = status.dragenter
                        let pidtemp = Number(designitem.pid / 100) * 100
                        designChange(state.design, pidtemp, 'dragenter', status.dragenter)
                    }
                } else {
                    designitem.active = true
                    let pidtemp = Math.floor(designitem.pid / 100) * 100
                    designChange(state.design, pidtemp, 'haveactive', true)
                }
            }
        }

    },
    modules: {
        models: model
    }
})
