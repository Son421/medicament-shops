var express = require('express');
var router = express.Router();


/* GET all shops. */
router.get('/', function(req, res, next) {
  var shopsModel = require('../models/shops');

  shopsModel.find({}).then(shopsList => res.send(JSON.stringify(shopsList)));
  //res.send('respond with a resource');
});

module.exports = router;
