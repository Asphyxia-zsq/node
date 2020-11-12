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
  response.write('<head> <meta charset="UTF-8"> </head>')

  response.write('输出一句话')

  response.end('结束响应也可以输出一些话')
}).listen(3000) //设置端口