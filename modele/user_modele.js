var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
       "Pseudo": String,
       "Email": String,
       "Password": String
})

var User = mongoose.model("users",userSchema);

module.exports= User;
