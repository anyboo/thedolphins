import lodash from 'lodash'
const state = {
    dialog: [],
    modalbackdrop: false,
    modalbackdropzindex: 1997
}

const getters = {}


const actions = {}

const mutations = {
    popdialog: (state) => {
        state.dialog = lodash.dropRight(state.dialog)
        if (state.dialog.length == 0) {
            state.modalbackdrop = false
        } else {
            state.modalbackdropzindex = state.dialog.length * 2 + 1997
        }
    },
    pushdialog: (state, obj) => {
        state.dialog.push(obj)
        state.modalbackdropzindex = state.dialog.length * 2 + 1997
        state.modalbackdrop = true
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
