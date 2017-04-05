/* global describe it expect */
import store from '../store';
import * as types from '../store/mutation-types';

console.info(store);


describe('store getApi单元测试', () => {
    beforeEach(function(done) {
        let modelName = 'test';

        store.dispatch(types.GET_API, modelName).then(() => {
            done();
        });
    });

    afterEach(function() {

    });

    it(types.GET_API, () => {
        expect(store.state.a).toBe(3);
    });
});
