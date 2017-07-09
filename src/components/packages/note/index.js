import BtNote from './src/note.vue'

BtNote.install = function(Vue) {
    Vue.component(BtNote.name, BtNote)
}

export default BtNote
