import BtPanel from './src/portlet.vue'

/* istanbul ignore next */
BtPanel.install = function(Vue) {
    Vue.component(BtPanel.name, BtPanel)
}


export default BtPanel
