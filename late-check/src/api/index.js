const Router = require('koa-router');
const render = require('koa-views-render');
const api = new Router();
const Home = require('../views/Home');

api.get('/', ctx => {
    // ctx.body = 'test 성공';
    ctx.render('Home');
});

// 라우터를 내보냅니다.
module.exports = api;