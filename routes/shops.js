var express = require('express');
var router = express.Router();


/* GET all shops. */
router.get('/', function(req, res, next) {
  var shopsModel = require('../models/shops');

  shopsModel.find({}).then(shopsList => res.send(JSON.stringify(shopsList)));
});

router.get('/products/:shopID', function (req, res, next) {
  var productsModel = require('../models/products');

  products = productsModel.aggregate()
                .match({"shopID": req.params.shopID})
                .unwind('$productsList');
  if (req.query['sort']) {
    var params = req.query['sort'].split('-');
    var query = {};
    query[`productsList.${params[0]}`] = params[1];
    products = products.sort(query)
  }
  
              
  products.group({
    _id: "$_id",
    "shopID": {"$first": "$shopID"},
    "products": {"$push" : "$productsList"}
  })
  .exec().then(productsList => res.send((productsList[0])))
});

module.exports = router;
