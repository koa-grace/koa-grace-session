'use strict';

var koa = require('koa');
var router = require('koa-grace-router');
var session = require('..');

var app = koa();

// 配置api
app.use(session(app));

app.use(router(app, {
  root: './example/controller',
  domain: '127.0.0.1'
}));

app.listen(3000, function() {
  console.log('Listening on 3000!');
});
