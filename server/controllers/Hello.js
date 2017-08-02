'use strict';
const Router = require('koa-router');

const router = new Router();

router.get('/api', function (ctx) {
  ctx.body = 'Api is ready!';
});

module.exports = function(app) {
  app
  .use(router.routes())
  .use(router.allowedMethods());
};
