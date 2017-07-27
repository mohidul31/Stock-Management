/*Module*/
var express = require('express');
var db = require('../db_config');
var app = express();
module.exports = app;


/*route*/

app.get('/sell', function(request, response) {


	db.qb.get('products_info',function(error,results){

		var data={
			title:"Sell Product",
			base_url:db.base_url,
			products_info_list:results,
		}
		
		response.render('view_product_sell',data);
	});
	
});

app.post('/sell', function(request, response) {


	var product_id=request.body.products_id;
	var products_qty=request.body.products_qty;
	var remarks=request.body.remarks;

	db.qb.where('product_id',product_id).get('products_info',function(error,results){

		var unit_price=results[0]['unit_price'];

		var insert_in_out_data={
				'product_id' :product_id,
				'in_qty' : '0',
				'out_qty' : products_qty,
				'in_out_type' : '2',
				'in_out_unt_price' : unit_price,
				'remarks' : remarks,
			}
			// insert in products_in_out_data
			db.qb.insert('product_in_out_data',insert_in_out_data,function(error,results){});

			var update_data={
				remain_stock:results[0]['remain_stock']-products_qty,
			}
			db.qb.update('products_info', update_data, {product_id:product_id}, function(error,results){});
	});

	response.redirect('/');

});
