import BtMenu from './src/menu';

/* istanbul ignore next */
BtMenu.install = function(Vue) {
  Vue.component(BtMenu.name, BtMenu);
};

export default BtMenu;
