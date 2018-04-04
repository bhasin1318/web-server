var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.use(express.static('public'));

app.get('/', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});


app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});