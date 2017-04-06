import urlUtil from '../utils/urlprofile';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

function httpGetFieldsApi(model, fields) {
    let apiUrlGet = urlUtil.getUrlField(model, fields);
    return Vue.http.get(apiUrlGet);
}

function httpGetApi(model) {
    let apiUrl = urlUtil.getUrl(model);
    return Vue.http.get(apiUrl);
}

function httpAppendApi({ model, form }) {
    let apiUrl = urlUtil.getUrl(model);
    return Vue.http.post(apiUrl, form);
}

function httpEditApi({ model, id, form }) {
    let apiUrl = urlUtil.getUrlById(model, id);
    return Vue.http.put(apiUrl, form);
}

function httpDeleteApi({ model, id }) {
    let apiUrl = urlUtil.getUrlById(model, id);
    return Vue.http.delete(apiUrl);
}
export default {
    httpGetApi,
    httpGetFieldsApi,
    httpAppendApi,
    httpEditApi,
    httpDeleteApi
};
