/*My Sql Database Connection*/
var mysql      = require('mysql');

var db_settings = {
    host     : 'localhost',
  	user     : 'root',
  	password : '',
  	database : 'stock_db'
};
var qb = require('node-querybuilder').QueryBuilder(db_settings, 'mysql', 'single');
 
module.exports.qb=qb;

/*Base Url*/
var base_url='http://localhost:1000/';
module.exports.base_url=base_url;
