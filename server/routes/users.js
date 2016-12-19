var express = require('express');
var router = express.Router();
var user=require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Find if user exists
Validate user*/
router.post('/findUser', function(req, res, next) {
 console.log("inside find route");
 console.log(req.body.username);
 console.log(req.body.password);


 user.count({'username': req.body.username}, function (err, count){
   if(count>0){
       console.log("user exists");
   }
   else{
     console.log("invalid user");
   }
});



 user.find({username:req.body.username,password:req.body.password},function(err,alluser){
   if(err) {
     console.log("error");
     res.send("error");

   }
   else {

     res.send("success");
   }
 });
});
module.exports = router;
