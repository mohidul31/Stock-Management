var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'location_db'
});

connection.connect(function(err) {
  if (err){
  	throw err;
  } 
  console.log("Database Connected Successfully!");
});

module.exports.con=connection;