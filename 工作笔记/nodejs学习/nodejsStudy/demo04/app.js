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
