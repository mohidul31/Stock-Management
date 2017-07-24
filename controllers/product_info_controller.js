/*Module*/
var express = require('express');
var db = require('../db_config');
var app = express();
module.exports = app;


/*route*/

app.get('/create', function(req, res) {

	var data={
			title:"Add New Product",
			base_url:db.base_url,
		}
	res.render('view_add_product_info',data);
	
});
app.post('/insert_product_indo', function(req, res) {

	var insert={
		product_name :req.body.name,
		product_details :req.body.details,
		unit_price :req.body.unit_price,
		remain_stock :req.body.opening_stock,
	}

	console.log(insert);

	res.redirect('/');
	
});