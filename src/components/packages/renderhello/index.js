import BtRenderHello from './src/renderhello'

BtRenderHello.install = function(Vue) {
    Vue.component(BtRenderHello.name, BtRenderHello)
}

export default BtRenderHello
