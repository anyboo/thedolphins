import 'element-ui/lib/theme-default/index.css'
import './styles/index.css'
import './styles/btindex.css'

import Vue from 'vue'
import VueResouse from 'vue-resource'
import App from './app.vue'
import router from './router'
import store from './store'
import BtCom from './components'
import mixin from './mixins/mixin'

Vue.use(VueResouse)
Vue.use(BtCom)
Vue.mixin(mixin)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
