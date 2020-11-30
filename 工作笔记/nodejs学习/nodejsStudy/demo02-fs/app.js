const fs = require("fs");
// fs.stat('./html',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     // 判断是文件还是目录
//     data&&console.log(data,data.isFile(),data.isDirectory())
// })

// fs.mkdir('./css',(err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('创建成功 ')
// })

// fs.writeFile('./html/index.html','你好nodejs',err=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('创建并写入成功')

// })

// fs.appendFile('./css/base.css','body{color:red};',err=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('追加文件成功')
// })

// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(data.toString())  //把buffer转string类型
// })

// fs.readdir('./html',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(data)
// })

// // 功能1重命名，功能2：移动文件
// fs.rename('./html/index.html','./html/index1.html',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('重命名成功')
// })

// fs.readdir("./", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   let items = data.filter(item=>item=='upload')
//   if(items.length==0){
//       fs.mkdir('./upload',(err)=>{
//         if (err) {
//             return console.log(err);
//         }
//         console.log('创建目录upload成功')
//       })
//   }else{
//     console.log('创建目录upload失败')

//   }
// });

// let path = './html'
// let dirArr = []

// fs.readdir(path,(err,data)=>{
//     if(err) return console.log(err)
//     for(let i=0,length=data.length;i<length;i++){
//         fs.stat(path +'/' + data[i],(error,da)=>{
//             if(da.isDirectory()) dirArr.push(data[i])
//             if(i==length-1)  console.log(dirArr)
//         })
//     }

// })

// async function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(123);
//     }, 1000);
//   });
// }

// async function b() {
//   let avalue = await a();
//   console.log(avalue);
// }
// b();



// for(var i=0;i<=5000;i++){
//     fs.appendFile('./data.json','{"content":"我是内容"}\n',err=>{

//     })
// }

// //fs 从文件流中读取数据
// // 创建一个读取流
// let ReadStream = fs.createReadStream('./data.json')
// let str = ''
// let count = 0
// // 监听读取流状态
// ReadStream.on('data',(data)=>{
//     count++
//     str += data
// })
// // 监听读取完成打印数据
// ReadStream.on('end',()=>{
//     console.log(str)
//     console.log(count)
// })
// // 读取错误
// ReadStream.on('error',(err)=>{
//     if(err) return console.log(err)
// })


// // 引流方式写入文件 只能写入一次

// let WriteStream = fs.createWriteStream('./app.json')

// WriteStream.write('HHHH\nHHHH\n','UTF8')
// // 标记写入完成
// WriteStream.end()

// WriteStream.on('finish',()=>{
//     console.log('写入完成')
// })
// WriteStream.on('error',(err)=>{
//     console.log(err)
// })


// 管道流
var readStream = fs.createReadStream('./mn.jpg')
var writeStream = fs.createWriteStream('./img/mn1.jpg')

readStream.pipe(writeStream)
