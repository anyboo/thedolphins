import urlUtil from '../utils/urlprofile';
import restfulapi from '../api/restfulapi';


describe("urlprofile 接口单元测试", function() {
    var model = "test";
    var fields = ["test", "sdf"];
    var result = "";

    beforeEach(function() {

        result = urlUtil.getUrlField(model, fields);
        console.log(result);
    });

    afterEach(function() {

    });

    it("getUrlField API 测试", function() {
        expect(result).toMatch(model);
    });
});

describe("restfulapi接口单元测试", function() {
    var model = "test";
    var fields = ["test", "sdf"];
    var responsedata = null;
    beforeEach(function(done) {
        restfulapi.httpGetApi(model, fields).then((response) => {
                responsedata = response;
                done();
            })
            .catch(function(response) {
                responsedata = response;
                done();
            });
    });

    afterEach(function() {

    });

    it("retfulapi restfulapi测试", function() {
        expect(responsedata.status).toEqual(200);
    });
});
