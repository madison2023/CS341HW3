//Rachel Madison

var express = require('express');
var router = express.Router();
var dbms_promise = require('./dbms_promise');


async function getDataInfo(cherryQuery, plainQuery, chocolateQuery) {
    try{
        const result1 = await dbms_promise.dbquery(cherryQuery);
        const result2 = await dbms_promise.dbquery(plainQuery);
        const result3 = await dbms_promise.dbquery(chocolateQuery);
        
        //accessing the SUM passed back from database
        var result = [result1[0]["SUM(QUANTITY)"], result2[0]["SUM(QUANTITY)"], result3[0]["SUM(QUANTITY)"]];
        return result;
    } 
    catch(error){
        console.log(error)
    }
}


router.post('/', async function(req, res, next) {
    //creating data to post
    
    //info from client side
    var selectedMonth = req.body.month;
    
    //querys that will be sent for each topping
    var cherryQuery = `SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH="${selectedMonth}" AND TOPPING="Cherry";`;
    var plainQuery = `SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH="${selectedMonth}" AND TOPPING="Plain";`;
    var chocolateQuery = `SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH="${selectedMonth}" AND TOPPING="Chocolate";`;

    //getting the quantity of each topping for that month from the database
    var result = await getDataInfo(cherryQuery, plainQuery, chocolateQuery);
    
    //formating data into JSON to use on client side
    var obj = []; 
    obj[0] = {topping: "cherry", quantity: result[0]};
    obj[1] = {topping: "plain", quantity: result[1]};
    obj[2] = {topping: "chocolate", quantity: result[2]};

    const myJSON = JSON.stringify(obj);
    res.send(myJSON);
    
    
});


module.exports = router;