/**
 * Module dependencies.
 */
var express=require('express');
var app=express();

/*Custom Module*/
var home_controller = require('./controllers/home_controller');

/* Start the server*/
app.listen(1000,function(req,res) {
	console.log("Server Strats In Port 1000");
});

/*Middleware*/
app.use('/',home_controller);
