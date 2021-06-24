const express = require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
  res.render('login1')
})
router.post('/dologin',(req,res,next) =>{
  console.log(req.body)
  res.send('dologin页面')
})


module.exports = router