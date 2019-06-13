const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
    productname: {type: String, required:true},
    desc: {type: String, required: true},
    type: {type: String, required:true},
    date: {type:String, required: true},
    price: {type:Number, required: true},
    userEmail: {type:String}
    // user: [{type: Schema.Types.ObjectId, ref:"User"}]
})

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
