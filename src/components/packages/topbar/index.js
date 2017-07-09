import BtTopbar from './src/topbar.vue'

/* istanbul ignore next */
BtTopbar.install = function(Vue) {
  Vue.component(BtTopbar.name, BtTopbar)
}

export default BtTopbar