import Vue from 'vue'
import Vuex from 'vuex'
//import * as actions from './actions'
//import * as getters from './getters'
import model from './modules/model'
import lodash from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        designitem: { id: 1, name: '', component: '', componentdata: {}, pid: 0, index: 0, },
        design: [],
        designid: 0
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
            designitemcopy.pid = pid
            state.design.push(designitemcopy)
        },

    },
    modules: {
        models: model
    }
})
