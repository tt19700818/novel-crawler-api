const { app } = require('./utils/connect');

app.all('*',(req,res,next)=>{
    //这里处理全局拦截，必须写在最上面，因为其他接口无next
    next()
});

app.use('/book',require('./router/book'));

app.listen(80,()=>console.log('服务启动'));