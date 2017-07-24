/**
 * Module dependencies.
 */
var express=require('express');
var app=express();
var bodyParser = require('body-parser');

/*Custom Module*/
var home_controller = require('./controllers/home_controller');
var product_info_controller = require('./controllers/product_info_controller');


/* Start the server*/
app.listen(1000,function(req,res) {
	console.log("Server Strats In Port 1000");
});

/*config*/
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))


/*Middleware*/
app.use('/public',express.static('./public'));
app.use('/',home_controller);
app.use('/product_info',product_info_controller);
