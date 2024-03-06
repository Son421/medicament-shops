function getProductsListModel (shop) {
    var mongoose = require('mongoose');

    var Products = new mongoose.Schema({
        id: String,
        name: String,
        price: Number
    });

    return mongoose.model(shop, Products, shop);
}

module.exports = {
    getProductsListModel
};