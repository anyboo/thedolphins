import BtAlert from './src/alert.vue'

BtAlert.install = function(Vue) {
    Vue.component(BtAlert.name, BtAlert)
}

export default BtAlert
