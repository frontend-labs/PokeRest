var express = require('express');
var router = express.Router();
var cjson = require('cjson');
var pokemonCollection = cjson.load('./dummy/pokemonCollection.json');

/* GET List Pokemon */
router.get('/:id', function(req, res, next){
	idPokemon = req.params.id;
	res.json(pokemonCollection[idPokemon]);
});

module.exports = router;