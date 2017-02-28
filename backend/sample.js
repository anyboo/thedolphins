var koa = require('koa');
var app = new koa();

app.use(function *(){
 this.body = 'Hello KOA';
});

app.listen(3000);
console.log("start sample.js");
