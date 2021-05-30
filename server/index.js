const Koa = require("koa");
const Router = require("koa-router");

const koa = new Koa();
const router = new Router();

router.get('/api', ctx => {
    ctx.status = 200
    ctx.body = {error: false, data: {message: "Hello Twitch!"}}
});

koa.use(router.middleware());

console.log("Tether API is listening on port 5000!")
koa.listen(5000);