import Vue from 'vue';
import VueResouse from 'vue-resource';
import App from './app.vue';
import router from './router';
import store from './store';
//import VueI18n from 'vue-i18n';
import Element from 'element-ui';
import BtCom from './components/src';

import 'element-ui/lib/theme-default/index.css';
import './styles/index.css';
import './styles/btindex.css';
//require('es6-promise').polyfill();


Vue.use(VueResouse);
//Vue.use(VueI18n);
Vue.use(Element);
Vue.use(BtCom);

Vue.config.lang = 'zh-cn';
//Vue.locale('zh-cn', zhLocale);
//Vue.locale('en', enLocale);

new Vue({ 
    el: '#app',
    store,
    router,
    render: h => h(App)
});
