import Design from './design';
import Hello from './hello';

const components = [
	Design,
	Hello
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

export default {
	version: '1.0.1',
	install,
	Design,
	Hello
}