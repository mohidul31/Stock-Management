/*Module*/
var express = require('express');
var db = require('../db_config');
var app = express();
module.exports = app;


/*route*/
app.get('/', function(req, res) {

	var sql="SELECT * FROM `products_info`";

	db.con.query(sql, function(error,results) {

		var data={
			title:"Stock Report | Home Page",
			product_info_list:results,
		}
		res.render("view_home",data);

	});
});

app.get('/home', function(req, res) {

	res.redirect('/');
	
});