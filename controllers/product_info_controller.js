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
app.post('/insert_product_info', function(req, res) {

	var insert_product_data={
		'product_name':req.body.name,
		'product_details':req.body.details,
		'unit_price':req.body.unit_price,
		'remain_stock':req.body.opening_stock,
	}
	// insert products_info
	db.qb.insert('products_info', insert_product_data , function(error,results) {

		db.qb.select_max('product_id').get('products_info',function(err,res){

			var last_inserted_id=res[0]['product_id'];

			var insert_in_out_data={
				'product_id' :last_inserted_id,
				'in_qty' : req.body.opening_stock,
				'out_qty' : '0',
				'in_out_type' : '1',
				'in_out_unt_price' : req.body.unit_price,
				'remarks' : 'Opening Stock',
			}
			// insert in products_in_out_data
			db.qb.insert('product_in_out_data',insert_in_out_data,function(){});

		});
	});
	
	res.redirect('/');
});

app.get('/delete/:product_id', function(request, response) {

	var deleted_id=request.params.product_id;

	db.qb.delete('products_info', {product_id: deleted_id},function(error,results){});
	response.redirect('/');
	
});

app.get('/in_history', function(request, response) {

	db.qb.where('in_out_type',1).join('products_info', 'products_info.product_id=product_in_out_data.product_id')
	.get('product_in_out_data',function(error,results){
		
		var data={
			title:"Product In History",
			base_url:db.base_url,
			product_history:results,
		}
		response.render('view_product_in_out_history',data);
	});
	
});

app.get('/out_history', function(request, response) {

	db.qb.where('in_out_type',2).join('products_info', 'products_info.product_id=product_in_out_data.product_id')
	.get('product_in_out_data',function(error,results){
		
		var data={
			title:"Product Out History",
			base_url:db.base_url,
			product_history:results,
		}
		response.render('view_product_in_out_history',data);
	});
	
});