var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var open = require('open');
var path = require('path')
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/', function (req, res) {
	console.log(__dirname)
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

let url = 'http://localhost:' + PORT;
open(url,function(err){
	console.log("Success!")
});

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
