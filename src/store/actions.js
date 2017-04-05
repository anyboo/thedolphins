import * as types from './mutation-types';

export const appendApi = ({ commit }, obj) => {
    commit(types.APPEND_API, {
        id: obj.id
    });
};

