import Design from '../packages/design'
import Hello from '../packages/hello'
import Breadcrumb from '../packages/breadcrumb'
import BreadcrumbItem from '../packages/breadcrumb-item'
import Topbar from '../packages/topbar'
import Footer from '../packages/footer'
import Menu from '../packages/menu'
import MenuItem from '../packages/menu-item'
import SidebarMenu from '../packages/sidebar-menu'
import Tabs from '../packages/tabs'
import Table from '../packages/table'
import Label from '../packages/label'
import RenderHello from '../packages/renderhello'
import Portlet from '../packages/portlet'
import Modals from '../packages/modals'
import Form from '../packages/form'
import DropDownSelect from '../packages/dropdown-select'
import Panel from '../packages/panel'
import ModuleTable from '../packages/moduletable'

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
    RenderHello,
    Portlet,
    Modals,
    Form,
    DropDownSelect,
    Panel,
    ModuleTable
]

const install = function(Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
}

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
    RenderHello,
    Portlet,
    Modals,
    Form,
    DropDownSelect,
    Panel,
    ModuleTable
}
