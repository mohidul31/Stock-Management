/*Module*/
var express = require('express');
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