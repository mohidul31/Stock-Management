/*Module*/
var express = require('express');
var app = express();
module.exports = app;	//export

/*route*/
app.get('/home', function(req, res) {
	res.send("Hello World");
});