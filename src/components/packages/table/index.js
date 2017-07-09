import BtTable from './src/table'

/* istanbul ignore next */
BtTable.install = function(Vue) {
  Vue.component(BtTable.name, BtTable)
}

export default BtTable