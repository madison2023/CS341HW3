//Rachel Madison

var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise');


router.post('/', async function(req, res, next) {
    //creating data to post
    
        var quantity = req.body.quantity;
        var topping = req.body.topping;
        var notes = req.body.notes;
        
        var insertQuery = `INSERT INTO ORDERS (MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES ('OCT', '1', '${quantity}', '${topping}', '${notes}');`
        var result = await dbms_promise.dbquery(insertQuery);

});


module.exports = router;