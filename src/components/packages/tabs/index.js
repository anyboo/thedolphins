import BtTabs from './src/tabs.vue'

/* istanbul ignore next */
BtTabs.install = function(Vue) {
    Vue.component(BtTabs.name, BtTabs)
}

export default BtTabs
