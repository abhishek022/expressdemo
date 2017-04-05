var express = require('express');
var mysql = require('mysql');
var path = require('path');
var router = express.Router();


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'hexaware',
  database : 'school'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function (req, res) {
  connection.query('SELECT * FROM `students` WHERE `id` = "0000000002"', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    console.log(results[0]);
    res.send( results[0]["name"] + " "+results[0]["age"] + " "+results[0]["id"]);
  });

});



module.exports = router;
