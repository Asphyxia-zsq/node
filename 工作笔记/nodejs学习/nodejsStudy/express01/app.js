const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = new express();



// 配置中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


// 1.安装ejs npm i ejs --save
// 2.配置ejs
app.engine("html",require('ejs').__express);
app.set("view engine","html");
// 使用ejs
// res.render("index",{}) //默认加载引擎的文件夹是views

// 配置静态web目录
app.use(express.static('static'));

//配置应用级中间件(用于权限判断)
app.use((req,res,next)=>{
  console.log(new Date());
  next();
})
app.get('/',(req,res)=>{
  let title = '我是标题后台数据'
  // 设置cookie
  res.cookie("username","张三",{
    maxAge:1000*60*60
  })
  res.render("index",{title})
})
app.get('/getcookie',(req,res)=>{
  let username = req.cookies.username
  res.send("获取cookie" + username)
})
// 使用第三方中间件
app.get('/login',(req,res)=>{
  //req.query 获取get传值
  res.render("login",{})
})
app.post('/dologin',(req,res)=>{
  //req.body 获取post传值
  let data = req.body
  res.send(`账号：${data.username} 密码：${data.pass}`)
})

app.get('/news',(req,res)=>{
  let userinfo = {
    username:"zhangsan",
    age:20
  }
  let h3 = "<H3>我是一个h3</H3>"
  res.render("news",{userinfo,h3})
})

app.get('/news/add',(req,res,next)=>{
  console.log('这就是路由集中间件');
  next();
})

app.get('/news/:id',(req,res)=>{
  res.send("新闻动态路由"+ req.params['id'])
})
app.listen(3000)