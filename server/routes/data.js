var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("inside test");
	var jsonob={"name":"Amit","age":"26","location":"Bangalore"};
  res.send(jsonob);
});

router.get('/js', function(req, res, next) {
	var obj2={"product":"Mobile","price":"12000"};
  res.send(obj2);
});

router.get('/register', function(req, res, next) {
	var obj={"name":"Nokia","username":"Mobile","password":"12000"};
  res.send(obj2);
});

module.exports = router;