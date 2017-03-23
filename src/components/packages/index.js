import Design from './design';
import Hello from './hello';
import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';
import Topbar from './topbar';
import Footer from './footer';
import Menu from './menu';
import MenuItem from './menu-item';
import SidebarMenu from './sidebar-menu';
import Tabs from './tabs';
import Table from './table';
import Label from './label';
import RenderHello from './renderhello';

const components = [
	Design,
	Hello,
	Breadcrumb,
	BreadcrumbItem,
	Topbar,
	Footer,
	SidebarMenu,
	Menu,
	MenuItem,
	Tabs,
	Table,
	Label,
	RenderHello
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
	Hello,
	Breadcrumb,
	BreadcrumbItem,
	Topbar,
	Footer,
	SidebarMenu,
	Menu,
	MenuItem,
	Tabs,
	Table,
	Label,
	RenderHello
}