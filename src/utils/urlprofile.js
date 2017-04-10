const apiUrl = 'http://www.bullstech.cn:9999/api/'

function getUrl(model) {
    return apiUrl + model + '/'
}

function getUrlById(model, id) {
    return apiUrl + model + '/' + id
}


function getUrlField(model, fields) {
    return apiUrl + model + '/?fields=' + encodeURIComponent(fields.join())
}

export default {
    getUrl,
    getUrlField,
    getUrlById,
    apiUrl,
}
