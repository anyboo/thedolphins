import Vue from 'vue'
import Vuex from 'vuex'
//import * as actions from './actions'
//import * as getters from './getters'
import model from './modules/model'
import lodash from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        designitem: { id: 1, name: '', component: '', componentdata: {}, pid: 0, index: 0, active: false, haveactive: false, dragenter: false },
        design: [],
        designid: 0,
        dragenterArray: [],
        dragenterCol: 0
    },
    getters: {
        getDesignStore: state => {
            return state.design.filter(designitem => designitem.pid == state.designid)
        }
    },
    mutations: {
        designPush: (state, obj) => {
            state.design.push(obj)
        },
        designEdit: (state, { id, pid }) => {
            let designitem = lodash.find(state.design, {
                'id': Number(id)
            })
            designitem.pid = pid
        },
        designCopy: (state, { id, pid, maxid }) => {
            let designitem = lodash.find(state.design, {
                'id': Number(id)
            })
            let designitemcopy = lodash.cloneDeep(designitem)
            designitemcopy.id = maxid
            designitemcopy.index = maxid
            designitemcopy.pid = pid
            let clientid = maxid

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
            designCloneDeep(state.design, id, maxid)

            state.design.push(designitemcopy)
        },
        componentColChange: (state, { id }) => {
            state.dragenterCol = id
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
