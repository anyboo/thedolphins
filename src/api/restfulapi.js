import urlUtil from '../utils/urlprofile';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

function httpGetApi(model, fields) {
    let apiUrlGet = urlUtil.getUrlField(model, fields);
    console.log(apiUrlGet);
    return Vue.http.get(apiUrlGet);
    /*.then((response) => {
            return new Promise(function(resolve, reject) {
                resolve(response);
            });
        })
        .catch(function(response) {
            return new Promise(function(resolve, reject) {
                reject(response);
            });
        });
        */
}

export default {
    httpGetApi
};
