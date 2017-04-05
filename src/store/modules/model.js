import restfulapi from '../../api/restfulapi';
import * as types from '../mutation-types';

const state = {
    models: {},
    added: [],
    checkoutStatus: null
};

// getters
const getters = {

};

// actions
const actions = {
    [types.APPEND_API](state, { id }) {
        state.lastCheckout = null;
        const record = state.added.find(p => p.id === id);
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            });
        } else {
            record.quantity++;
        }
    },
    [types.GET_API]({ commit }, tableName) {
        return new Promise(resolve => {
            restfulapi.httpGetApi(tableName)
                .then(response => {
                    commit(types.GET_API, {tableName, response});
                    resolve();
                })
                .catch(function(response) {
                    console.log(response);
                });
        });
    },
};
// mutations
const mutations = {
    [types.GET_API](state, {tableName, response}) {
        state.models[tableName] = response.data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
