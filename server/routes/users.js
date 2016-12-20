var express = require('express');
var router = express.Router();
var user=require('../models/user');
var passport=require('passport');

//passport
var app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Find if user exists
Validate user*/
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    alert("Authentication was successful!!");
    res.redirect('/users/' + req.user.username);
  });


/*
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
});*/
module.exports = router;
