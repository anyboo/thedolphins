import BtModuleTable from './src/moduletable.vue'

/* istanbul ignore next */
BtModuleTable.install = function(Vue) {
    Vue.component(BtModuleTable.name, BtModuleTable)
}

export default BtModuleTable
