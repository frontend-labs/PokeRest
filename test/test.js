var pokeServer = require('../pokeServer.js');
var request = require('supertest')(pokeServer);

describe('GET /', function() {
    it('returns hello world', function(done) {
        request
            .get('/')
            .expect('Hello, World!', done);
    });
});

describe('GET /listPokemon',function(){
	it('show json',function(done){
		request
			.get('/listPokemon')
			.expect('Content-Type',/json/)
			.expect('Content-Length','20')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
			})
	});
});