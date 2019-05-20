const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String},
    email: {type: String},
    date: {type:Number, required:true},
    telephone: {type:Number},
    country:{type:String},
    password:{type:String, required:true}
})

var User = mongoose.model("User", usersSchema);

module.exports = User;