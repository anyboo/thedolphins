import BtProgress from './src/progress.vue'

BtProgress.install = function(Vue) {
    Vue.component(BtProgress.name, BtProgress)
}

export default BtProgress
