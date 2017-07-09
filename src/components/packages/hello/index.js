import BtHello from './src/hello.vue'

/* istanbul ignore next */
BtHello.install = function(Vue) {
    Vue.component(BtHello.name, BtHello)
}

export default BtHello
