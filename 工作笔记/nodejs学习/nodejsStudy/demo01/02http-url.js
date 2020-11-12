// 引入http模块
const http = require('http');
// 创建http服务
http.createServer((request,response)=>{
  // request:获取url传过来的信息
  // response：获取响应信息

  //获取url
  const url = require('url')
  let arg = url.parse(request.url,true).query
  
  // 设置响应头 状态码为200 文件类型为html 字符集为utf-8
  response.writeHead(200, { "Content-type":"text/html;charset='utf-8'"})
  response.write('<head> <meta charset="UTF-8"> </head>')

  response.write(`名字：${arg.name}年龄${arg.age}`)
  const md5 = require('md5')
  response.end(md5('12345'))
}).listen(3000) //设置端口

