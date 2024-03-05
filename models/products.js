var mongoose = require('mongoose');

var Products = new mongoose.Schema({
    shopID: String,
    products: [new mongoose.Schema({
        id: String,
        name: String,
        price: Number
    })]
});

module.exports = mongoose.model('productsList', Products, 'productsList');