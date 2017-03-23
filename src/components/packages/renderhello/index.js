import BtRenderHello from './src/renderhello';

/* istanbul ignore next */
BtRenderHello.install = function(Vue) {
  Vue.component(BtRenderHello.name, BtRenderHello);
};

export default BtRenderHello;