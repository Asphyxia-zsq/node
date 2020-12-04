const fs = require('fs');
const path = require('path');
const url = require('url');

function getMime(extname,staticpath){
  const data = fs.readFileSync(staticpath +'data/mime.json')
  return JSON.parse(data.toString())[extname]
}

exports.static = function(request,response,staticpath){
  // 获取路径去掉get穿值url.parse(url).pathname
  let pathname = url.parse(request.url).pathname
  // 判断是否跟域名
  pathname = pathname == '/' ? '/index.html' : pathname
  // 取到请求文件后缀名
  let extname = path.extname(pathname)
  // 过滤
  if(pathname != '/favicon.ico'){
    // 通过fs读取文件
    // console.log(extname,'extname')
    fs.readFile(staticpath + 'static'+ pathname,(err,data)=>{
        if(err){
          response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
          response.end('这个页面不存在');
        }
        // 根据后缀名设置响应头
        // console.log(extname)
        // getMime(extname)
        response.writeHead(200, {'Content-Type': getMime(extname,staticpath) +';charset="utf-8"'});
        // 输出文件
        response.end(data);
    })
  }
}