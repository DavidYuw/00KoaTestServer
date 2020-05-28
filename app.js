
const Koa = require('koa');
const Router = require('koa-router');
// const cors = require('koa-cors'); //跨域处理插件

const index = require("./routes/index.js");
const admin = require("./routes/admin.js");
const api = require("./routes/api.js");

const app = new Koa();
const router = new Router();

// app.use(cors());

router.use(index);
router.use("/admin", admin);
router.use("/api", api);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(7001);

console.log('Server running at http://101.200.215.149:7001/');