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

/*config*/
app.set('view engine','ejs');


/*Middleware*/
app.use('/public',express.static('public'));

app.use('/',home_controller);
