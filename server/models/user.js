var mongoose = require('mongoose');
//schema for authentication
var userSchema = new mongoose.Schema({
    name: String,
    username: {type:String, unique: true},
    password: String
});
var User = mongoose.model('userDetails', userSchema);
module.exports=User;
