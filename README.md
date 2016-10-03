## koa-grace-session

koa-grace session中间件

### Install

    $ npm install koa-grace-session --save

### Usage

```
session(app, options)
```
- app: {Object} koa instance.
- options: {Object}
  - redis: {Object} redis配置项，例如：
    
        { 
          host: '127.0.0.1',
          port: 6379,
          password: 'password' 
      }
  - 其他配置项参考：[generic-session配置](https://github.com/koajs/generic-session) 及 [koa-redis配置](https://github.com/koajs/koa-redis)

**app.js**

```
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
```

### Test

    npm test

### License

MIT