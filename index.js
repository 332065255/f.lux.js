const Koa = require('koa');
const debug = require('debug');
const calcnew = require('./src/getTime')
const route = require('koa-route')
const static = require('koa-static');
const path = require('path');
let log = debug('Log')
const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});
app.use(route.get('/getTime',ctx=>{
    // ctx.body = "getTime";
    console.log(ctx.query)
    ctx.response.type='json';
    ctx.response.body=calcnew(0,ctx.query.lng.split(',')[0],ctx.query.lng.split(',')[1],ctx.query.year,ctx.query.month,ctx.query.day);
}))
app.use(static(path.join(__dirname)));
app.listen(8080);
log('app start at 8080')
