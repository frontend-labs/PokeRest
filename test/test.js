var pokeServer = require('../pokeServer.js');
var request = require('supertest')(pokeServer);

describe('index', function() {
    it('returns hello world', function(done) {
        request
            .get('/')
            .expect('Hello, World!', done);
    });
});

describe('listPokemon',function(){
	it('show json',function(done){
		request
			.get('/listPokemon')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				done();
			})
	});
});

//.set('Accept', 'application/json')