//Rachel Madison

var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise');

//CODE FOR SPECIFICATION 1

/* GET orders page. */
// router.get('/', function(req, res, next) {
//     const obj = []; 
//     obj[0] = {topping: "cherry", quantity: 2};
//     obj[1] = {topping: "plain", quantity: 6};
//     obj[2] = {topping: "chocolate", quantity: 3};

//     const myJSON = JSON.stringify(obj);
//     res.send(myJSON);
// });

//CODE FOR SPECIFICATION 2

router.post('/', function(req, res, next) {
    //creating data to post
    var selectedMonth = "" + req.body.month;
    var cherry = "Cherry";
    const obj = []; 
    var cherryQuery = `SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH="${selectedMonth}" AND TOPPING="${cherry}";`;
    obj[0] = {topping: "cherry", quantity: dbms_promise.dbquery(cherryQuery)};
    obj[1] = {topping: "plain", quantity: 6};
    obj[2] = {topping: "chocolate", quantity: 3};

    const myJSON = JSON.stringify(obj);
    res.send(myJSON);
});


module.exports = router;