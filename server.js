var express = require('express')

var app = express()
var portToUse = process.env.PORT || 3000
var middleware = require('./middleware.js')


app.use(middleware.logger)
app.get('/', function (req, res) {
	res.send('Hello Express')


app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('We are cool')
})

app.use(express.static(__dirname + '/public'))

console.log(__dirname)
app.listen(portToUse, function () {
	console.log('express server started at port ' +  portToUse)
})