var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var open = require('open');

var middleware = require('./middleware.js');

app.use(middleware.logger);

// app.get('/', function (req, res) {
// 	res.send('Hello!');
// });
app.use(express.static('public'));

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
