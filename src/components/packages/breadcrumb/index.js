import BtBreadcrumb from './src/breadcrumb.vue';

/* istanbul ignore next */
BtBreadcrumb.install = function(Vue) {
  Vue.component(BtBreadcrumb.name, BtBreadcrumb);
};

export default BtBreadcrumb;
