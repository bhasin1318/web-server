var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var open = require('open');

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

open('http://localhost:3000',function(err){
	console.log("Success!")
});

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
