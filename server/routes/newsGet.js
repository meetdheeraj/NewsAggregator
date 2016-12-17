var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var News=require("../models/news.js");

/* GET users listing. */
////http://localhost:8080/newsGet
router.post('/', function(req, res, next) {

  console.log();
  res.send(req.body);
});

//update
////http://localhost:8080/newsGet/updateNews
router.put('/updateNews', function(req, res, next) {

  console.log("updateNews");
  var query = {'author':req.body.author};
  console.log(query);
  req.body.author = 'Dheeraj';
  console.log(req.newData);
  News.findOneAndUpdate(query, req.body, {upsert:false}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
});

  res.send(req.body);
});

//delete
////http://localhost:8080/newsGet/deleteNews
router.delete('/deleteNews', function(req, res, next) {

  console.log("deleteNews");
  News.remove({ "url": req.body.url }, function(err) {
    if (!err) {
            //message.type = 'notification!';
            console.log("Deleted Successfully");
    }
    else {
            //message.type = 'error';
            console.log("Error");
    }
});
  res.send(req.body);
});

//view
//http://localhost:8080/newsGet/viewNews
router.get('/viewNews', function(req, res, next) {
var news;
  console.log("viewNews");
  News.find(function(err, newsItem) {

  if (err){
console.log("---------------There was an error while fetching data-----------------------");
    return console.error(err);

}
  news=newsItem;
  console.log(news);
  res.json(news);
});

});

//save news
//http://localhost:8080/newsGet/saveNews
router.post('/saveNews', function(req, res, next) {

  console.log("saveNews");
  //var newsAr=req.body.articles;
  //console.log(newsAr);
  var newsToSave=new News();
   newsToSave.author=req.body.author;
   newsToSave.title=req.body.title;
   newsToSave.description=req.body.description;
   newsToSave.url=req.body.url;
   newsToSave.urlToImage=req.body.urlToImage;
   newsToSave.publishedAt=req.body.publishedAt;

   //save
    newsToSave.save(function (err, savedNews) {
    if (err) {

      console.error(err);
      return res.status(500).send();
    }
    else{
    console.log(savedNews);
    console.log(newsToSave.title);

    return res.status(200).send();
  }

    });

  res.send(req.body);
});
module.exports = router;
