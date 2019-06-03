const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema({

    firstname: {type: String, required:true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    date: {type:Date, required: true},
    telephone: {type:Number, required: true},
    country:{type:String, required: true},
    password:{type:String, required: true},
    })

    
var User = mongoose.model("User", usersSchema);

module.exports = User;