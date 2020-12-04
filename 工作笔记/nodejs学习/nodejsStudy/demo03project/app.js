const http = require('http');
const common = require('./module/routes.js')
http.createServer(function (request, response) {
  
  common.static(request,response,'./')
  
 
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');