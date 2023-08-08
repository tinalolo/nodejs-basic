import Koa from 'koa';
const app = new Koa();

// middleware 1
app.use(async (ctx, next) => {
  console.log('Middleware 1 before');
  await next();
  console.log('Middleware 1 after');
});

// middleware 2
app.use(async (ctx, next) => {
  console.log('Middleware 2 before');
  // 調用next()方法把請求傳遞給下一個中間件
  await next();
  console.log('Middleware 2 after');
});

// middleware 3
app.use(async ctx => {
  console.log('Middleware 3');
  // 在這裡處理請求
  ctx.body = 'Hello World';
});

app.listen(3002);