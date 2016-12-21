var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var router = express.Router();
var User=require("../models/user.js");
/* GET users listing. */


//schema for authentication


router.post('/', function(req, res, next) {
console.log("inside register route");

  var name=req.body.name;
  var username=req.body.username;
  var password=req.body.password;


  var newUser=new User();
  newUser.name=name;
  newUser.username=username;
  newUser.password=password;

  //save
  newUser.save(function (err, savedUser) {
  if (err) {
  console.log(savedUser);
  console.log(newUser.name+" "+newUser.username+" "+newUser.password);

  return res.send("Error during save");
    
  }
  else{

  console.error(err);
    return res.send("Saved Successfully");
}

  });

  /*
  new User(
  name=req.body.name,
  username=req.body['username'],
  password=req.body['password']

).save(function (err, savedUser) {
  if (err) {

    console.error(err);
    return res.status(500).send();
  }
  //console.log(savedUser);
  console.log(newUser.name+" "+newUser.username+" "+newUser.password);

  return res.status(200).send("Success");

  });
*/

  //display
  User.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})


/*
  console.log(name+username+password);
  var register = new user({
  name: String,
  username: String,
  password: String });
  //save into DB


//display
user.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users);
})
  res.send('<h1>Hi '+name+'</h1><br> Username : '+username+'<BR> Password : '+password);
  */
});

module.exports = router;
