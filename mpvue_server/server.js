let Koa = require('koa');
let KoaRouter = require('koa-router');


// 浏览器和React Native
let Fly=require("flyio/src/node")
let fly=new Fly;


// 生成应用
const app = new Koa();
// 生成路由器
const router = new KoaRouter();

router.get('/', (ctx, next) => {
  console.log('接收到请求');
  
  // 返回数据
  ctx.body = '返回的内容222';
});


let datas = require('./datas/data.json');
console.log(typeof datas);
router.get('/searchBooks', (ctx, next) => {
  // 1. 接收请求参数
  let req = ctx.query.req;
  console.log('前端搜索的关键字: ', req);
  // 2. 处理请求数据，访问数据库调出相应的数据
  // 发送请求给豆瓣，接收豆瓣返回的数据返回给前端
  
  // 3. 返回处理数据
  ctx.body = datas;
})


router.get('/getOpenId', async (ctx, next) => {
  // 1. 获取请求参数
  let code = ctx.query.code;
  let appId = 'wx810e8b1fde386fde';
  let appSecret = '99d253e9b94a4a7eaf116fe77995dd5e';
  
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  // 发送请求
  // fly.get(url) // 返回值就是promise
  //   .then(function (response) {
  //     console.log(response.data);
  //
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  let result = await fly.get(url) // 返回值就是promise
  console.log(typeof result.data);
  ctx.body = JSON.parse(result.data).openid;
})


app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 声明允许使用路由方法

app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3000');
})
