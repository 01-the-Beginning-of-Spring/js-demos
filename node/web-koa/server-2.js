'use strict';

const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = koaRouter();

// log request URL
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-router;
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>`;
});

// add router middleware
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
