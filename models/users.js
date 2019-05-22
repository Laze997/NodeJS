const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, required: true},
    date: {type:String},
    telephone: {type:Number},
    country:{type:String},
    password:{type:String, required:true}
})

var User = mongoose.model("User", usersSchema);

module.exports = User;