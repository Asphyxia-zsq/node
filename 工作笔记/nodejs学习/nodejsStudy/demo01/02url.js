const url = require('url');
let api = 'www.baidu.com?name=张三&age=20';
var getValue = url.parse(api,true).query
console.log(getValue.name);//张三