const Koa = require('koa');
const path = require('path');
const koaBody = require('koa-body');


// 创建一个Koa对象表示web app本身:
const app = new Koa();
app.use(require('koa-static')(path.join(__dirname, '../static')));
app.use(koaBody());
require('./controllers')(app);

module.exports = app;
