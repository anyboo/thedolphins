import BtSidebarMenu from './src/sidebar-menu.vue'

/* istanbul ignore next */
BtSidebarMenu.install = function(Vue) {
    Vue.component(BtSidebarMenu.name, BtSidebarMenu)
}

export default BtSidebarMenu
