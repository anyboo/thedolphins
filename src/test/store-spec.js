/* global describe it expect */
import store from '../store/';
import * as types from '../store/mutation-types';


describe('store getApi单元测试', () => {
    beforeEach(function(done) {
        let modelName = 'test';
        store.dispatch(types.GET_API, modelName).then(() => {
        	console.info('test');
            done();
        });
    });

    afterEach(function() {

    });

    it(types.GET_API, () => {
        console.info(store.state.models.models.test);
        expect(store.state.models.models.test.count).toBeDefined();
    });
});
