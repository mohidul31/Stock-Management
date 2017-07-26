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

	
	var	product_name =req.body.name;
	var	product_details =req.body.details;
	var	unit_price =req.body.unit_price;
	var	remain_stock =req.body.opening_stock;
	

	var sql = "INSERT INTO `products_info`(`product_id`, `product_name`, `product_details`, `unit_price`, `remain_stock`) VALUES (NULL, '"+product_name+"', '"+product_details+"', '"+unit_price+"', '"+remain_stock+"')";

	db.con.query(sql, function(error,results) {
		console.log('Successfully Inserted in products_info');
		var sql2="SELECT MAX(product_id) as last_inserted_id FROM products_info";
		
		db.con.query(sql2,function(error,results){
			var last_inserted_id=results[0]['last_inserted_id'];

			var sql3 = "INSERT INTO `product_in_out_data`(`product_in_out_data_id`,`product_id`,`in_qty`,`out_qty`,`in_out_type` ,`in_out_unt_price` ,`remarks`)VALUES (NULL,'"+last_inserted_id+"','"+remain_stock+"','0','1','"+unit_price+"','Opening Stock')";

				     db.con.query(sql3,function(error,results){
				     	console.log('Successfully Inserted in product_in_out_data');
				     });

		});

	});
	
	res.redirect('/');

	
	
});