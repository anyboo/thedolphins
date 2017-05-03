import BtHtmlRender from './src/'

BtHtmlRender.install = function(Vue) {
    Vue.component(BtHtmlRender.name, BtHtmlRender)
}

export default BtHtmlRender
