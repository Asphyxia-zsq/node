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



# npm安装包时 i ,-g,-s,-d的区别

- **`i`** 是 **`install`** 的简写
- **`-g`** 是全局安装，不带 **`-g`** 会安装在个人文件夹
- **`-S`** 与 **`--save`** 的简写，安装包信息会写入 **`dependencies`** 中
- **`-D`** 与 **`--save-dev`** 的简写，安装包写入 **`devDependencies`** 中

## dependencies 与 devDependencies

- **`dependencies`** 生产阶段的依赖,也就是项目运行时的依赖
- **`devDependencies`** 开发阶段的依赖，就是我们在开发过程中需要的依赖，只在开发阶段起作用的



你写 `ES6` 代码，需要 `babel` 转换成 `es5` ，转换完成后，我们只需要转换后的代码，上线的时候，直接把转换后的代码部署到生产环境，不需要 `bebal` 了，生产环境不需要。这就可以安装到 **`devDependencies`** ，再比如说代码提示工具，也可以安装到 **`devDependencies`** 。

如果你用了 `Element-UI`，由于发布到生产后还是依赖 `Element-UI`，这就可以安装到 **`dependencies`** 。



# nodejs中的包、npm、第三方模块、packge.json以及cnpm

















