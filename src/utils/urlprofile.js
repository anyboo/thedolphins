const apiUrl = 'http://www.bullstech.cn:9999/api/';

function getUrl(model) {
    return apiUrl + model + '/';
}

function getUrlField(model, fields) {
    return apiUrl + model + '/?fields=' + encodeURIComponent(fields.join());
}

export default {
    getUrl,
    getUrlField,
    apiUrl
};
