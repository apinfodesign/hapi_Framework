var chai        = require('chai');
var chaiHttp    = require('chai-http');
var assert      = chai.assert;
var fs          = require('fs');
const path 		= require("path");
var app         = require('../app');
var expect      = chai.expect;
var rimraf      = require('rimraf');
var mkdirp      = require('mkdirp');
chai.use(chaiHttp);

//testing harness
var welcomeMessage = 'hello world - this is a hapi framework';
var url = 'http://localhost:8000';
//

describe('basic Express server... ', function() {

    before(function(done) {
        app.start( done )
    })



    it('returns user string on /echo/', function(done){
        chai.request(url)
            .get('/echo/Billybob')
            .end(function(err, response){
                expect(err).to.be.null;
                assert.equal(
                    response.text, "Hello Billybob!")
                done();
            });
    });


    it('returns 3 item length list when new', function(done){
        chai.request(url)
            .get('/resources')
            .end(function(err, res){
                assert.equal(app.dataArray.length, 3);
                done();

            });
    });


    it('adds one file resource to existing array', function(done) {
         chai.request(url)
            .post( "/resources" )
            .send( {"name":"david","hobby":"trains"} )
            .end(function(err, res){
                expect(err).to.be.null;
                assert.deepEqual( app.dataArray[ app.dataArray.length-1 ], res.body );
                done();
             });
    });


    it('returns 4 item length list after adding element', function(done){
        chai.request(url)
            .get('/resources')
            .end(function(err, res){
                assert.equal(app.dataArray.length, 4);
                done();
            });
    });


    it('should return 3rd element when receives index 2', function(done) {
        chai.request(url)
            .get('/resources/2')
            .end(function(err, res){
                expect(err).to.be.null;
                assert.deepEqual( res.body , app.dataArray[2]);
                done();
                });
            });

    it('returns error message and no resource if requested element out of range', function(done) {
        var outOfRange = app.dataArray.length;  //one longer than dataArray
        console.log(outOfRange,' is outOfRange');
        var invalidRequest = '/resources/'+outOfRange;
        chai.request(url)
            .get(invalidRequest)
            .end(function(err, res){
                expect(err).to.be.null;
                assert.deepEqual( res.body , {} );  //res.body is empty of course
                assert.deepEqual( res.text , 'Requested Resource Not Available' );  //best valid response
                done();
            });
    });


    after(function(done){ app.stop(done)  } );


});