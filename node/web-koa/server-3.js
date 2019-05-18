'use strict';

const Koa = require('koa');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = koaRouter();

// log request URL
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-router;
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`u/p=>${name}/${password}`);
    if (name == 'koa' && password == '111111') {
        ctx.response.body = `<h1>Welcome, ${name}</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});


// add body parser
app.use(bodyParser());
// add router middleware
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
