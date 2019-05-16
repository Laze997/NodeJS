// exports.create = function(firstname, lastname, email, date, telephone, country, password){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.email = email;
//     this.date = date;
//     this.telephone = telephone;
//     this.country = country;
//     this.password = password;
// }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required:true},
    email: {type: String, required:true},
    date: {type:Date, required:true},
    telephone: {type:Number, required:true},
    country: {type:String, required:true},
    password: {type: String, required:true}
})

var Product = mongoose.model("Users", usersSchema);

module.exports = Users;