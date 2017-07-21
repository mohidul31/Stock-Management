/*Module*/
var express = require('express');
var db = require('../db_config');
var app = express();
module.exports = app;


/*route*/
app.get('/', function(req, res) {

	var data={
		title:"Home Page",
	}
	res.render("view_home",data);
});

app.get('/home', function(req, res) {

	res.redirect('/');
	
});

app.get('/db',function(req,res){

	var sql="SELECT * FROM `products_info`";

	db.con.query(sql, function(error,results) {

		console.log(results);
		//res.render("view_db_data",{data: results});
		//res.redirect('/');

	});

});