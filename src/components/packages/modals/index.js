import BtModals from './src/modals.vue'

/* istanbul ignore next */
BtModals.install = function(Vue) {
  Vue.component(BtModal.name, BtModals)
}

export default BtModals