import urlUtil from '../utils/urlprofile';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

function httpGetFieldsApi(model, fields) {
    let apiUrlGet = urlUtil.getUrlField(model, fields);
    return Vue.http.get(apiUrlGet);
}

function httpGetApi(model) {
    let apiUrlGet = urlUtil.getUrl(model);
    return Vue.http.get(apiUrlGet);
}
export default {
    httpGetApi,
    httpGetFieldsApi
};
