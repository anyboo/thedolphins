/* global describe it expect */
import store from '../store/'
import * as types from '../store/mutation-types'
import lodash from 'lodash'
let id = 0

describe('store getApi 单元测试', () => {

    beforeEach(function(done) {
        let modelName = 'test'
        let form = { 'ss': 'testAdd' }
        store.dispatch(types.APPEND_API, { 'model': modelName, 'form': form }).then(() => {
            done()
        })
    })

    afterEach(function() {

    })

    it(types.APPEND_API, () => {
        //store.commit(types.GET_CURRENT_API, 'test')
        //console.info(store.getters.getCurrentModel)
        //expect(store.state.models.models.test.count).toBeDefined()

    })
})

describe('store getApi 获取单元测试', () => {
    beforeEach(function(done) {
        let modelName = 'test'
        store.dispatch(types.GET_API, modelName).then(() => {
            done()
        })
    })

    afterEach(function() {

    })

    it(types.GET_API, () => {
        store.commit(types.GET_CURRENT_API, 'test')
        id = lodash.get(lodash.last(store.state.models.models.test.data), '_id')
        expect(store.state.models.models.test.count).toBeDefined()

    })
})

describe('store getApi编辑单元测试', () => {
    beforeEach(function(done) {
        let modelName = 'test'
        let form = { 'ss': 'testEdit' }
        store.dispatch(types.EDIT_API, { 'model': modelName, 'id': id, 'form': form }).then(() => {
            done()
        })
    })

    afterEach(function() {

    })

    it(types.EDIT_API, () => {
        store.commit(types.GET_CURRENT_API, 'test')
        expect(store.state.models.models.test.count).toBeDefined()

    })
})

describe('store getApi删除单元测试', () => {
    beforeEach(function(done) {
        let modelName = 'test'
        store.dispatch(types.DELETE_API, { 'model': modelName, 'id': id }).then(() => {
            done()
        })
    })

    afterEach(function() {

    })

    it(types.DELETE_API, () => {
        store.commit(types.GET_CURRENT_API, 'test')
        expect(store.state.models.models.test.count).toBeDefined()

    })
})
