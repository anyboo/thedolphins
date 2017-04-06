import restfulapi from '../../api/restfulapi';
import * as types from '../mutation-types';

const state = {
    models: {},
    currentModel: {}
};

// getters
const getters = {
    getCurrentModel: state => {
        return state.currentModel;
    }
};

// actions
const actions = {
    [types.GET_API]({ commit }, tableName) {
        return new Promise(resolve => {
            restfulapi.httpGetApi(tableName)
                .then(response => {
                    commit(types.GET_API, { tableName, response });
                    resolve();
                })
                .catch(function(response) {
                    console.info(response);
                });
        });
    },
    [types.APPEND_API]({ commit }, tableName, form) {
        return new Promise(resolve => {
            restfulapi.httpAppendApi(tableName, form)
                .then((response) => {
                    console.info(response);
                    //commit(types.APPEND_API, { tableName, response });
                    resolve();
                })
                .catch(function(response) {
                    console.info(response);
                });
        });
    },
    [types.EDIT_API]({ commit }, tableName, id, form) {
        return new Promise(resolve => {
            restfulapi.httpEditApi(tableName, id, form)
                .then((response) => {
                    console.info(response);
                    //commit(types.APPEND_API, { tableName, response });
                    resolve();
                })
                .catch(function(response) {
                    console.info(response);
                });
        });
    },
    [types.DELETE_API]({ commit }, tableName, id) {
        return new Promise(resolve => {
            restfulapi.httpDeleteApi(tableName, id)
                .then(() => {
                    //commit(types.APPEND_API, { tableName, response });
                    resolve();
                })
                .catch(function(response) {
                    console.info(response);
                });
        });
    },
};
// mutations
const mutations = {
    [types.GET_API](state, { tableName, response }) {
        state.models[tableName] = response.data;
    },
    [types.GET_CURRENT_API](state, tableName) {
        state.currentModel[tableName] = state.models[tableName];
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
