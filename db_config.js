/*Database Connection*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'stock_db'
});

connection.connect(function(err) {
  if (err){
  	throw err;
  } 
  console.log("Database Connected Successfully!");
});

module.exports.con=connection;


/*Base Url*/
var base_url='http://localhost:1000/';
module.exports.base_url=base_url;
