import BtTable from './src/table.vue'

/* istanbul ignore next */
BtTable.install = function(Vue) {
    Vue.component(BtTable.name, BtTable)
}

export default BtTable
