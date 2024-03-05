var express = require('express');
var router = express.Router();


/* GET all shops. */
router.get('/', function(req, res, next) {
  var shopsModel = require('../models/shops');

  shopsModel.find({}).then(shopsList => res.send(JSON.stringify(shopsList)));
});

router.get('/products/:shopID', function (req, res, next) {
  var productsModel = require('../models/products');
  var shopID = req.params.shopID;

  productsModel.findOne({"shopID": shopID}).then(productsList => res.send((productsList)));
});

module.exports = router;
