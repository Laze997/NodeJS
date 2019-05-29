const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
    productname: {type: String},
    desc: {type: String},
    type: {type: String},
    date: {type:String},
    price: {type:Number},
    userEmail:{type:String}
})

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
