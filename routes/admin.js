const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '<h1>This is the backgroud : index page</h1>';
    ctx.body += '<h2>2.1  <a href="/admin/user">user manage</a>';
    ctx.body += '<h2>2.2  <a href="/admin/focus">focus manage</a>';
    ctx.body += '<h2>2.3  <a href="/admin/authority">authority manage</a>';
});

router.get('/user', (ctx, next) => {
    ctx.body = '<h1>This is the backgroud : user management page</h1>';
});

router.get('/focus', (ctx, next) => {
    ctx.body = '<h1>This is the backgroud : focus management page</h1>';
});


router.get('/authority', (ctx, next) => {
    ctx.body = '<h1>This is the backgroud : authority management page</h1>';
});

module.exports = router.routes();