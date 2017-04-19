import BtComponent from './src/component.vue'

/* istanbul ignore next */
BtComponent.install = function(Vue) {
    Vue.BtComponent(BtComponent.name, BtComponent)
}

export default BtComponent
