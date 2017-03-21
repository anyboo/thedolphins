import BtMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
BtMenuItem.install = function(Vue) {
  Vue.component(BtMenuItem.name, BtMenuItem);
};

export default BtMenuItem;
