const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    date: {type:Date},
    telephone: {type:Number},
    country:{type:String},
    password:{type:String},
    })

    
var User = mongoose.model("User", usersSchema);

module.exports = User;