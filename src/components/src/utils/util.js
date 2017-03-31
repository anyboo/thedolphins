const apiUrl = 'http://www.bullstech.cn:9999/api/';
export function GetUrl(model) {
    return apiUrl + model + '/';
}
export function GetUrlField(model, fields) {
    return apiUrl + model + '/?fields=' + encodeURIComponent(fields.join());
}
