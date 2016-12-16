var mongoose = require('mongoose');
//schema for news item
var newsSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: {type:String, unique: true},
    urlToImage: String,
    publishedAt:String
});
var News = mongoose.model('newsitems', newsSchema);
module.exports=News;
