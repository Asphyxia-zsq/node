const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const ws = require("nodejs-websocket");
const app = new express();
// 创建websocket
var server = ws.createServer(function(conn){
  // console.log(conn)
  conn.on("text", function (str) {
      console.log("收到的信息为:"+str)

      
      // setInterval(() => {
      //   conn.sendText('返回的数据12')
      // }, 1000);
      
  })
  conn.on("close", function (code, reason) {
      console.log("关闭连接")
  });
  conn.on("error", function (code, reason) {
      console.log("异常关闭")
  });
  let count = 0
  setInterval(()=>{
    conn.sendText('返回的数据'+count)
    count++
  },5000)
  
}).listen(3001)
console.log("WebSocket建立完毕")


// 配置session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat', //服务器端生成session的签名（可以随意写）
  resave: false, //强制存储session 即使它没有变化
  saveUninitialized: true, //强制将未初始化的session存储
  cookie: { 
  	secure: false, //ture代表只有https才能访问cookie
  	maxAge: 100*60*60
  }, //配置cookie的信息
  name:'itying',//修改session对应cookie的名称
  rolling:true,//表示会对session的过期时间进行续期  在每次请求时强行设置cookie，这将充值cookie过期时间
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/',//无用户名密码
    // mongoUrl: 'mongodb://admin:123456@127.0.0.1:27017',//有用户名密码
    dbName:'shop',
    touchAfter: 24 * 3600 // time period in seconds
  }),
}))

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

const login = require('./router/login');
app.use('/login1',login);

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


app.get('/setsession',(req,res)=>{
  // 设置session
  console.log(res.sessions)
  req.session.username = '我是session的名称小明'
  res.send('开始设置session')
})
app.get('/getsession',(req,res)=>{
  res.send('开始获取session' + req.session.username)
})
// 使用第三方中间件
app.get('/login',(req,res)=>{
  //req.query 获取get传值
  res.render("login",{})
})
app.get('/login2',(req,res)=>{
  // res.render("login",{})
  console.log(req.query,'这是login2数据')
  // console.log(req)
  res.send(req.query)
})
app.post('/dologin',(req,res)=>{
  //req.body 获取post传值
  let data = req.body
  res.send(`账号：${data.username} 密码：${data.pass}`)
})

app.post('/dologin1',(req,res)=>{
  //req.body 获取post传值
  let data = {
    code:200,
    data:req.body,
    msg:'登录成功'
  }
  
  res.send(data)
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
console.log("localhost:3000")