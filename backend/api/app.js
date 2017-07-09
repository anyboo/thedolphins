var control = require('./controllers/dboperations')
var compress = require('koa-compress')
var logger = require('koa-logger')
var serve = require('koa-static')
var route = require('koa-route')
var cors = require('koa-cors')
var koa = require('koa')
var path = require('path')
var app = module.exports = new koa()
app.use(logger())
app.use(cors())
app.use(route.post('/login/', control.login))
app.use(route.post('/upload', control.upload))
app.use(route.get('/api/:name', control.all))
app.use(route.get('/api/:name/:id', control.fetch))
app.use(route.post('/api/:name', control.add))
app.use(route.put('/api/:name/:id', control.modify))
app.use(route.delete('/api/:name/:id', control.remove))


app.use(route.options('/', control.options))
app.use(route.trace('/', control.trace))
app.use(route.head('/', control.head))

// Serve static files
app.use(serve(path.join(__dirname, 'public')))

// Compress
app.use(compress())

if (!module.parent) {
    app.listen(9999)
    console.log('listening on port 9999')
}
