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