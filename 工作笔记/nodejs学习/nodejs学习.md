

# nodejs介绍

1. node.js是基于Google V8引擎     把V8引擎搬到服务器上用于做服务器的软件
2. node.js是程序员必备技能
3. node.js最擅长处理高并发
   * 高并发：正常服务器语言一个客户端连接创建一个线程（2M）内存，一个8g的内存可以容纳4000个客户，而nodejs语言可以一个线程容纳很多客户8g==4万个客户
   * 高并发原理：开启一份线程当有客户连接就触发内部事件，通过非阻塞i/o事件驱动机制让node.js程序宏观上并行





# nodeJs HTTP模块、URL模块、supervisor工具



## http

1. node-http-server创建一个node http服务器

   ```
   // 引入http模块
   const http = require('http');
   // 创建http服务
   http.createServer((request,response)=>{
     // request:获取url传过来的信息
     // response：获取响应信息
   
     //获取url
     console.log(request.url) 
     // 设置响应头 状态码为200 文件类型为html 字符集为utf-8
     response.writeHead(200, { "Content-type":"text/html;charset='utf-8'"})
     response.write('<head> <meta charset="UTF-8"> </head>') //解决乱码
     response.write('输出一句话')
   
     response.end('结束响应也可以输出一些话')
   }).listen(3000) //设置端口
   ```



## url

```
const url = require('url');
let api = 'www.baidu.com?name=张三&age=20';
var getValue = url.parse(api,true).query //传true 可以获取object类型的参数
console.log(getValue.name);//张三
```



### supervisor

保存代码自动更新插件

```
npm i -g supervisor 
使用 supervisor app.js
```



#### 解决supervisor找不到问题

1. 在win10 系统中搜索框 输入 Windows PowerShell，选择 管理员身份运行

2. 使用，win+R打开了powershell命令行之后,输入set-ExecutionPolicy RemoteSigned，然后更改权限为A，最后通过 get-ExecutionPolicy 查看当前的状态





# commonjs

commonjs就是模块化的标准，nodejs就是commonjs模块化的实现



## nodejs中的模块

1.核心模块：http、 url模块

2.自定义模块：用户编写的模块





## 自定义模块的使用

模块

```
function getApi(api){
	return api
}
exports.getApi = getApi //暴露方法1
module.exports = { getApi } //暴露方法2

```

引入模块

```
const tools = require('./getApi')
tools.getApi('www.baidu.com')
```



## 自定义模块的目录

```
node_modules => axios => indes.js
放在node_modules 里面的文件可以不写路径直接引入    
例如  const axios = require（'axios'）  会自动去找里面的index.js
如果里面不是index.js的话，就会报错想解决这种报错就可以通过packge.json配置入口(main)   npm init --yes

```



# npm 、 packge.json



## npm命令

```
npm i jqery --save//安装模块
npm uninstall jqery //卸载模块
npm list //查看目录下的模块
npm info jqery //查看包的信息
npm i jqery@1.8.0 --save //指定版本安装
```

## packge.json

```
{
  "dependencies": {
    "bootstrap": "^4.5.3",
    "jquery": "^3.5.1",
    "mui": "0.0.1",
    "silly-datetime": "^0.1.2"
  },
  "devDependencies": {
    "eslint": "^7.13.0"
  }
}

^表示第一位版本号不变后两位取最新
*表示全部取最新
~前两位不变，最后去最新
```

## npm安装包时 i ,-g,-s,-d的区别

- **`i`** 是 **`install`** 的简写
- **`-g`** 是全局安装，不带 **`-g`** 会安装在个人文件夹
- **`-S`** 与 **`--save`** 的简写，安装包信息会写入 **`dependencies`** 中
- **`-D`** 与 **`--save-dev`** 的简写，安装包写入 **`devDependencies`** 中

## dependencies 与 devDependencies

- **`dependencies`** 生产阶段的依赖,也就是项目运行时的依赖
- **`devDependencies`** 开发阶段的依赖，就是我们在开发过程中需要的依赖，只在开发阶段起作用的



你写 `ES6` 代码，需要 `babel` 转换成 `es5` ，转换完成后，我们只需要转换后的代码，上线的时候，直接把转换后的代码部署到生产环境，不需要 `bebal` 了，生产环境不需要。这就可以安装到 **`devDependencies`** ，再比如说代码提示工具，也可以安装到 **`devDependencies`** 。

如果你用了 `Element-UI`，由于发布到生产后还是依赖 `Element-UI`，这就可以安装到 **`dependencies`** 。







# node 中的fs模块

1. 
2. 
3.  
4. 
5. 
6. 
7. fs.rename //重命名
8. fs.rmdir 删除目录
9. fs.unlink 删除文件

### fs.stat //检测时文件还是目录

```
const fs = require('fs')
fs.stat('./html',(err,data)=>{
    err && console.log(err)
    // 判断是文件还是目录
    data&&console.log(data,data.isFile(),data.isDirectory())
})
```

### fs.mkdir //创建目录

```
fs.mkdir('./css',(err,data)=>{
    err && console.log(err)
    console.log(‘创建成功')
})
```

### fs.writeFile //写入文件

```
//创建并写入文件，如果文件存在进行替换
fs.writeFile('./html/index.html','你好nodejs',err=>{
  if(err){
    return console.log(err)

  }
  console.log('创建并写入成功')
})
```

### fs.appendFile //添加文件

```
//如果文件不存在创建并写入，如果存在追加内容
fs.appendFile('./css/base.css','body{color:red};',err=>{
    if(err){
        return console.log(err)
    }
    console.log('追加文件成功')
})
```

### fs.readFile //读取文件

```
fs.readFile('./html/index.html',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log(data.toString())  //把buffer转string类型
})
```

### fs.readdir //读取目录

```
fs.readdir('./html',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log(data) 
})
```

### fs.createReadStream //从文件流中读取数据

```
//fs 从文件流中读取数据 可以追加数据
// 创建一个读取流
let ReadStream = fs.createReadStream('./data.json')
let str = ''
let count = 0
// 监听读取流状态
ReadStream.on('data',(data)=>{
    count++
    str += data
})
// 监听读取完成打印数据
ReadStream.on('end',()=>{
    console.log(str)
    console.log(count)
})
// 读取错误
ReadStream.on('error',(err)=>{
    if(err) return console.log(err)
})
```

fs.createReadStream //从文件流中读取数据

```
// 引流方式写入文件 只能写入一次

let WriteStream = fs.createWriteStream('./app.json')

WriteStream.write('HHHH\nHHHH\n','UTF8')
// 标记写入完成
WriteStream.end()

WriteStream.on('finish',()=>{
    console.log('写入完成')
})
WriteStream.on('error',(err)=>{
    console.log(err)
})
```



### readStream.pipe(writeStream)

```
// 管道流 用于复制文件
var readStream = fs.createReadStream('./mn.jpg')
var writeStream = fs.createWriteStream('./img/mn1.jpg')

readStream.pipe(writeStream)
```



# async和await

async是执行异步方法

await是等待异步方法的执行



await必须放在async的方法里面

```
async function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 1000);
  });
}

async function b() {
  let avalue = await a();
  console.log(avalue);
}
b();

```

# 创建一个web服务器

```
node\工作笔记\nodejs学习\nodejsStudy\demo03project   代码目录
```

# Mongodb

## 下载地址

https://www.mongodb.com/try/download/community

配置环境变量

```
//系统变量path里添加 D:\MongoDB\Server\4.4\bin
```



## 使用

启动命令 mongo

查看计算机的数据库 show dbs

创建数据库 use itying

给数据库的表添加数据 db.user.insert({"username":"zansan","age":18})

查看集合列表  show collections

查看集合user的数据 db.user.find()

删除数据库 db.dropDatabase()

删除集合 db.user.drop()



### 查找数据find（）

db.user.find({"age":13}) 查找所有age=13的数据

.find({"age":{$gt:22}}) age>22

.find({"age":{$lt:22}}) age>22

.find({"age":{$gt:22}}) age>=22

.find({"age":{$gte:22,$lte,26}}) age>=22  age<=23

.find({}"name",:/zhang/}) 查找name含有zhang的所有数据 正则

.find({},{name:1,age:1}) 查找显示指定列



### 排序 sort()

db.user.find().sort(”age“:1) age 升序

db.user.find().sort(”age“:-1) age 降序



### 查询前5条数据 分页

db.user.find().limit(5) 查询前5条

db.user.find().skip(10) 跳过前10条查询

page:查询页数，count一页显示几条

db.user.find().skip(page-1*count).limit(count)



### 查看条数

db.user.find().count()



### or 与 查询

db.user.find({$or:[{"age":22},{"age":25}]}) 查找age=22或者age=25的数据



### 修改数据和新增数据

db.user.update({"name":"小明"},{$set:{"age":16}})  查找名字为小明修改年龄为16岁



默认修改一条，如果要修改多条

db.user.update({"name":"小明"},{$set:{"age":16}},{multi:true}) 

### 删除数据

db.user.remove({"name":"wanwu"}) 删除name = wanwu的数据 

默认删除所有满足条件的数据

如果要只删除一条

db.user.remove({"name":"wanwu"},{justOne:true}) 



## 索引基础

### 获取语句的执行时间

db.user.find().explain("executionStats")



### 设置索引

db.user.ensureIndex({"username":1})  设置索引

db.user.dropIndex({"username":1}) 删除索引

db.user.getIndexes()获取当前集合索引



#### 复合索引

db.user.ensureIndex({"username":1},{”phone“:"1"})  设置索引



#### 唯一索引

db.user.ensureIndex({"age":1},{"unique":true})



## 账户权限配置

use admin => show users //查看用户

db.dropUser('admin') //删除超级管理员

db.updateUser(‘admin’,{pwd:'123456'}) //修改用户密码

1创建超级管理员

```
use admin
db.createUser({
	user:'admin',
	pwd:'123456',
	roles:[{role:'root',db:'admin'}]
})

```

2修改mongodb数据库配置文件 bin下的mongod.cfg

```
security:
  authorization: enabled
```

3重启mongodb服务

win+r   services.msc

```
数据库用户角色：read、readWrite;
数据库管理角色：dbAdmin、dbOwner、userAdmin；
集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
备份恢复角色：backup、restore；
所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
超级用户角色：root
内部角色：__system
```

4 切换admin 输入密码

```
use admin 
db.auth('admin','123456')
```



5给某个数据库添加管理员

```
use itying
db.createUser({
	user:'itying',
	pwd:'123456',
	roles:[{role:'dbOwner',db:'itying'}]
})

```

## 数据库集合与集合的关系

1一对一关系

例如：一个人对应一个唯一的身份证号

2一对多关系

例如：一个班级对应多名学生，

3多对多关系

例如：一个学生可以选多门课程，而同一门课程可以被多个学生选修

# mongodb的聚合管道

使用聚合管道可以对集合中的文档进行变换和组合

实际项目中用于表的关联查询和数据统

| 管道操作 | description                                 |                           |
| -------- | ------------------------------------------- | ------------------------- |
| $project | 增加、删除、重命名字段                      | 多字段时可以只显示name id |
| $match   | 条件匹配、只满足条件的文档才能进入下一阶段  |                           |
| $limit   | 限制结果的数量                              |                           |
| $skip    | 跳过文档的数量                              |                           |
| $sort    | 条件排序                                    |                           |
| $group   | 条件组合结果 统计                           |                           |
| $lookup  | 操作符 用于引入其它集合的数据（表关联查询） |                           |



```
//查找order表的数据 只显示trade_no 和 all_price字段
db.order.aggregate([
	{
		$project:{ trade_no:1,all_price:1}
	}
])


// 查找all_price <= 90 的数据
db.order.aggregate([
	{
		$project:{ trade_no:1,all_price:1}
	},
	{
		$match:{ all_price:{$gte:90}}
	}
])


// 以orderid进行分组 并且将num进行相加
db.order.aggregate([
	{
		$group:{ id:"$orderid",total:{$sum:"$num"}}
	}
])


//查找order表的数据 只显示trade_no 和 all_price字段 条件价格<=90  进行倒叙排列
db.order.aggregate([
	{
		$project:{ trade_no:1,all_price:1}
	},
	{
		$match:{ all_price:{$gte:90}}
	},
	{
		$sort:{ all_price:-1}
	}
])

//查找order表的数据 只显示trade_no 和 all_price字段 条件价格<=90  进行倒叙排列  只返回1条数据
db.order.aggregate([
	{
		$project:{ trade_no:1,all_price:1}
	},
	{
		$match:{ all_price:{$gte:90}}
	},
	{
		$sort:{ all_price:-1}
	}
	{
		$limit:1
	}
])

//表的关联查询
from:关联的表
localField：order表的关联的字段
foreignField：order_item表的关联的字段
as:把关联后的数据放到items里面
db.order.aggregate([
	{
		$lookup:{
			from："order_item",
			localField:"order_id",
			foreignField:"order_id",
			as:"items"
		}
	}
])
```

# mongodb的备份还原

备份

```

cmd 执行命令
mongodunp -h dbhost -d dbname -o dbdirectory
参数说明
	-h：mongodb所在服务器地址 ，例如127.0.0.1 当然也可以指定端口号 127.0.0.1：27017
	-d: 需要备份的数据库实例 例如test表
	-p：密码
	-u：用户名
	-o：备份的数据存放位置，例如：c/abc/这个目录里面存放该数据库实例的备份数据
```

还原

```
mongorestore -h dbhost -d dbname dbdirectory
参数说明
	-drop:恢复的时候先伤处当前的数据，然后回复备份的数据，就是说回复后，备份后添加修改的数据会被删除慎用
```

# nodejs调用mongo驱动

```
npm init --yes
npm i mongodb --save
```

## 对数据库的增删改查

例子demo04

```

// 引入mongodb
const {MongoClient} = require('mongodb');

// 定义数据库连接地址 终端输入mongo可查看
const url = 'mongodb://127.0.0.1:27017';

// 定义要操作的数据库
const dbName = 'itying'

// 实例化MongoClient 传入数据库连接地址
const client = new MongoClient(url,{ useUnifiedTopology: true })

// 连接数据库
client.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('数据库连接成功')
  let db = client.db(dbName)
  let collection = db.collection("user");
  
  // 查找数据
  // collection.find({}).toArray((err,data)=>{
  //   console.log(data)
  //   // 因为回调时异步，所以要在这里关闭
  //   // 操作数据库完毕后要关闭数据库连接
  //   client.close()
  // })

  // 增加数据
  // collection.insertOne({"name":"小明1","age":10},(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log('增加成功',result)
  //   client.close()
  // }) 

  // 修改数据
  // collection.updateOne({"name":"小明1"},{$set:{"name":"小明111"}},(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log('修改成功',result)
  //   client.close()
  // }) 

  // 删除一条数据
  // collection.deleteOne({"name":"小明111"},(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log('删除数据成功',result)
  //   client.close()
  // }) 

  // 删除多条数据
  // collection.deleteMany({"name":"小明111"},(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log('删除数据成功',result)
  //   client.close()
  // }) 
})
```

# Express

## 使用

```
npm init --yes
npm i express --save
```

代码

```
const express = require('express');
const app = new express();
app.get('/',(req,res)=>{
  res.send('hello wold')
  //get 取值 req.query
  //动态路由取值 req.params['name']
})
app.listen(3000)

 
```

## express里面使用ejs

```
const express = require('express');
const app = new express();
// 1.安装ejs npm i ejs --save
// 2.配置ejs
app.set("view engine","ejs");
// 使用ejs
// res.render("index",{}) //默认加载引擎的文件夹是views
app.get('/',(req,res)=>{
  let title = '我是标题后台数据'
  res.render("index",{title})
})
app.listen(3000)
```

## express里面的中间件

#### 配置应用级中间件(用于权限判断)

```
app.use((req,res,next)=>{
  console.log(new Date());
  next();
})
```

#### 配置路由级中间件

```

app.get('/news/add',(req,res,next)=>{
  console.log('这就是路由集中间件');
  next();
})

app.get('/news/:id',(req,res)=>{
  res.send("新闻动态路由"+ req.params['id'])
})
```

#### 错误处理中间件（一般用在路由匹配完成）

```
//匹配路由必须卸载最后面
app.use((req,res,next)=>{
  res.status(404).send('404')
})
```

## 内置中间件

```
app.use('/static',express.static('public'))
```

### 第三方中间件

```
用于获取post穿值
const express = require('express');
const app = new express();

1、npm i body-parser --save
2、const bodyParser = require('body-parser')
3、配置中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
4、接收post数据 req.body

```

```
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
```

## express里面的cookie

```
npm install cookie-parser --save
var express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
```

```
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
```

```
第三个参数
maxAge:设置过期时间，
signed:是否加密，
expires:设置过期日期Date，
httpOnly:设置是否只能后端访问， true只能后端访问
path：设置哪些路由可以访问cookie，
domain:实现多域共享cookie   如 aaa.itying.com  bbb.itying.com 写法domain:".itying.com"
secure:设置成为true时，cookie在http无效，在https中才有效

```

### 实现cookie加密

```
var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

//1、配置中间件时需要传入加密的参数
app.use(cookieParser("itying"))

//2、设置cookie时第三个参数传入signed：true
app.get('/',(req,res)=>{
  // 设置cookie
  res.cookie("username","张三",{
    maxAge:1000*60*60,
    signed:true
  })
  res.send("index")
})

//3、获取时使用req.signedCookies
app.get('/getcookie',(req,res)=>{
  let username = req.signedCookies.username
  res.send("获取cookie" + username)
})
```

## express里面的session

cookie保存在浏览器上 session保存在服务器上 session基于cookie

```
cnpm install express-session --save
const session = require('express-session')

var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat', //服务器端生成session的签名（可以随意写）
  resave: false, //强制存储session 即使它没有变化
  saveUninitialized: true, //强制将未初始化的session存储
  cookie: { 
  	secure: false, //ture代表只有https才能访问cookie
  	maxAge: 100*60*60
  } //配置cookie的信息
  name:'itying',//修改session对应cookie的名称
  rolling:true，//表示会对session的过期时间进行续期  在每次请求时强行设置cookie，这将充值cookie过期时间
  
}))
 //设置session 
  req.session.username = "zhangsan"
  //获取 req.session.username
  
```

## express里面的session保存到数据库

```
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

var app = express()
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
```

## express路由模块化

```
//router/login.js中的代码
const express = require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
  res.send('登录页面111')
})
module.exports = router

//app.js中的代码
const app = new express();
const login = require('./router/login');
app.use('/login1',login);
```

## express应用程序生成器

https://www.expressjs.com.cn/starter/generator.html

```
//安装
npx express-generator || cnpm i -g express-generator
```

```
express --view=ejs express10
```

```
//运行  node bin/www
```



# EJS模块引擎

安装

```
npm i ejs --save
```

```
//ejs渲染变量
let title = '我是标题后台数据'
<%=title%>

//渲染html
let h3 = "<H3>我是一个h3</H3>"
<%-h3%>

//条件判断
let flag = true
let score = 60
<%if(flag==true){%>
<strong>flag==true</strong>
<%}%>

<%if(score>=60){%>
<p>及格</p>
<%}else{%>
<p>不及格</p>
<%}%>

//循环遍历
let list = [111,222,333]
<ul>
<%for(var i=0;i<list.length;i++){%>
<li><%=list[i]%></li>
<%}%>
</ul>


//ejs引入公共文件（头部，底部等）
<%- include('footer.html') %>


```

## 指定ejs模板位置，默认在views

```
app.set('views',__drname+'views1')
```

## ejs后缀修改为html

```
const express = require('express')
const app = new express();
const ejs = require('ejs')

app.engine("html",ejs.__express)
app.set("view engine","html")

```

## 利用express.static 托管静态文件

```
const express = require('express')
const app = new express();
app.use(express.static('public'))
//配置完就可以使用public的文件了

//也可以配置虚拟目录
app.use('/static',express.static('public'))
```

