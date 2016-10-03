'use strict';

const genericSession = require('koa-generic-session');
const redisStore = require('koa-redis');

module.exports = function session(app, options) {
  options = options || {};
  
  app.keys = app.keys || ['koa-grace', 'koa-grace-session'];

  if (options.redis) {
    options.store = redisStore(options.redis)
  }

  return genericSession(options)
}
