
var express = require('express')
var morgan  = require('morgan')
var data = require('./data.json')

var app = express();
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.status(200).send("It's working");
});

app.get('/data', function(req, res) {
    res.status(200).send(data);
});

module.exports = app;
