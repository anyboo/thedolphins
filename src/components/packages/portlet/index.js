import BtPortlet from './src/portlet.vue'

/* istanbul ignore next */
BtPortlet.install = function(Vue) {
    Vue.component(BtPortlet.name, BtPortlet)
}

export default BtPortlet
