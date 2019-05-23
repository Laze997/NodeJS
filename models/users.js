const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
<<<<<<< HEAD
    email: {type: String},
    date: {type:Date},
=======
    email: {type: String, required: true},
    date: {type:String},
>>>>>>> d6ca444b22dbe30da9b3e80144b30d1b86f29e7f
    telephone: {type:Number},
    country:{type:String},
    password:{type:String}
})

var User = mongoose.model("User", usersSchema);

module.exports = User;