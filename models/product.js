const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModel = mongoose.model('Product', new Schema({
    productname: { type: String, required: true },
    desc: { type: String },
    type: { type: String },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
}))

module.exports = ProductModel;
