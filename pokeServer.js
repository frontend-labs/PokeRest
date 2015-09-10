var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var listPokemon = require('./routes/listPokemon');
var detailPokemon = require('./routes/detailPokemon');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/listPokemon',listPokemon);
app.use('/detailPokemon',detailPokemon);

app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/


module.exports = app;