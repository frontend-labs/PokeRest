var pokeServer = require('../pokeServer.js');
var request = require('supertest')(pokeServer);

describe('PokeRest', function() {
    it('returns hello world', function(done) {
        request
            .get('/')
            .expect('Hello, World!', done);
    });
});