var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    totalPrice: Number,
    customerInputs: new mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        address: String

    }),
    products: [new mongoose.Schema({
        name: String, 
        price: Number,
        quantity: Number
    })]
});

module.exports = mongoose.model('orders', cartSchema, 'orders');
