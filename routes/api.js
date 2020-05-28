const Router = require('koa-router');

const courseData = require("../data/courseData");
const courseFieldData = require("../data/courseFieldData");
const carouselData = require("../data/carouselData");
const recomCourseData = require("../data/recomCourseData");

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '<h1>This is the API : index page</h1>';
    ctx.body += '<hr />';
    ctx.body += "<h2>include two APIs :</h2>";
    ctx.body += "<h2>1. <a href='/api/getCourseFieldData'>getCourseFieldData</a></h2>";
    ctx.body += "<h2>2. <a href='/api/getCourseData/:field'>getCourseData</a></h2>";
    ctx.body += "<h2>3. <a href='/api/getCarouselData'>getCarouselData</a></h2>";
    ctx.body += "<h2>4. <a href='/api/getRecomCourseData'>getRecomCourseData</a></h2>";
});

router.get('/getCourseFieldData', (ctx, next) => {

    //跨域处理方法一 ：  原生JSONP处理
    // JSONP API 封装方法  https://www.cnblogs.com/yangzhou33/p/9011794.html
    let cb = ctx.query.callback;
    // ctx.type = 'text';
    ctx.body = cb + '(' + JSON.stringify(courseFieldData) + ')';
    
    //跨域处理方法二 ：  加载koa-cors 插件
    //ctx.body = courseFieldData;

});

router.get('/getCourseData/:field', (ctx, next) => {

    let field = ctx.params.field;
    let _courseData = courseData.filter((item) => {

        if (field === "all") {
            return true;
        }        
        return item.field === field;
    });

    //跨域处理方法一 ：  原生JSONP处理
    // JSONP API 封装方法  https://www.cnblogs.com/yangzhou33/p/9011794.html
    let cb = ctx.query.callback;
    // ctx.type = 'text';
    ctx.body = cb + '(' + JSON.stringify(_courseData) + ')';

    //跨域处理方法二 ：  加载koa-cors 插件
    // ctx.body = courseData;

});

router.get('/getCarouselData', (ctx, next) => {

    //跨域处理方法一 ：  原生JSONP处理
    // JSONP API 封装方法  https://www.cnblogs.com/yangzhou33/p/9011794.html
    let cb = ctx.query.callback;
    // ctx.type = 'text';
    ctx.body = cb + '(' + JSON.stringify(carouselData) + ')';
    
    //跨域处理方法二 ：  加载koa-cors 插件
    //ctx.body = courseFieldData;

});

router.get('/getRecomCourseData', (ctx, next) => {

    //跨域处理方法一 ：  原生JSONP处理
    // JSONP API 封装方法  https://www.cnblogs.com/yangzhou33/p/9011794.html
    let cb = ctx.query.callback;
    // ctx.type = 'text';
    ctx.body = cb + '(' + JSON.stringify(recomCourseData) + ')';
    
    //跨域处理方法二 ：  加载koa-cors 插件
    //ctx.body = courseFieldData;

});

module.exports = router.routes();