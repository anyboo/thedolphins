import BtLayout from './src/layout.vue'
import BtRow from './src/row.vue'
import BtCol from './src/col.vue'
/* istanbul ignore next */
BtLayout.install = function(Vue) {
    Vue.component(BtLayout.name, BtLayout)
    Vue.component(BtRow.name, BtRow)
    Vue.component(BtCol.name, BtCol)
}
export default { 'Layout': BtLayout, 'Row': BtRow, 'Col': BtCol }
