const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '<h1>This is the a test Koa Server of David</h1>';
    ctx.body += '<hr />';
    ctx.body += "<h2>include three modules :</h2>";    
    ctx.body += '<h2>1.   <a href="/front/"> web server Front</a>';
    ctx.body += '<br />';
    ctx.body += '<h2>2.  <a href="/admin/">web server Admin</a>';
    ctx.body += '<br />';
    ctx.body += '<h2>3.  <a href="/api/">web server API(JSONP)</a>';

});

router.get('/front', (ctx, next) => {
    ctx.body = '<h2>1.1  <a href="/about">about</a>';
    ctx.body += '<h2>1.2  <a href="/product">product</a>';  
});

router.get('/about', (ctx, next) => {
    ctx.body = '<h1>This is the front : about page</h1>';
});


router.get('/product', (ctx, next) => {
    ctx.body = '<h1>This is the front : product page</h1>';
});

module.exports = router.routes();