import BtForm from './src/form.vue'

/* istanbul ignore next */
BtForm.install = function(Vue) {
  Vue.component(BtForm.name, BtForm)
}

export default BtForm