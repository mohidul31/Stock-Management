/**
 * Module dependencies.
 */
var express=require('express');
var app=express();

/*Custom Module*/
var home_controller = require('./controllers/home_controller');
var product_info_controller = require('./controllers/product_info_controller');
/*var db = require('./db_config');*/

/* Start the server*/
app.listen(1000,function(req,res) {
	console.log("Server Strats In Port 1000");
});

/*config*/
app.set('view engine','ejs');


/*Middleware*/

//app.use('/public',express.static(require('path').resolve(__dirname + "/public")));
//app.use(express.static('./public/css/'));
app.use('/public',express.static('./public'));
app.use('/',home_controller);
app.use('/product_info',product_info_controller);
