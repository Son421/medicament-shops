var mongoose = require('mongoose');

var Shops = new mongoose.Schema({
    id: String,
    name: String
});

module.exports = mongoose.model('shops', Shops);