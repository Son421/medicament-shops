var express = require('express');
var router = express.Router();

router.post('/submit', (req, res, next) => {
    var cartModel = require('../models/cart');

    cartModel.create(req.body).then(result => res.send(result)).catch(error => {
        res.status(422).send({
            error: true,
            message: error._message
        })
    });
});

module.exports = router;