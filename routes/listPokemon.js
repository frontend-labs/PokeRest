var express = require('express');
var router = express.Router();
var cjson = require('cjson');
var pokemonCollection = cjson.load('./dummy/pokemonCollection.json');

/* GET List Pokemon */
router.get('/', function(req, res, next){
	res.json(pokemonCollection);
});

module.exports = router;