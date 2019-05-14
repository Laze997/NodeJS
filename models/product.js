// exports.create = function(productname, desc, type, date, price, userEmail){
//     this.productname = productname;
//     this.desc = desc;
//     this.type = type;
//     this.date = date;
//     this.price = price;
//     this.userEmail = userEmail;
// }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
    productname: {type: String, required: true},
    desc: {type: String},
    type: {type: String},
    date: {type:Date, required:true},
    price: {type:Number, required:true},
    userId:{type:String, required:true}
})

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
