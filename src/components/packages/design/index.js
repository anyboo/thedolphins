import BtDesign from './src/design.vue';

/* istanbul ignore next */
BtDesign.install = function(Vue) {
  Vue.component(BtDesign.name, BtDesign);
};

export default BtDesign;
