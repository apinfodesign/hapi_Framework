'use strict';
const Hapi = require('hapi');

// Create a server with a host and port
var server  = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

//Instead of file storage create dataArray, initialize with three elements
var dataArray = [ {name:'joe'}, {name:'billy'}, {name:'sally'}];
var addDelete;  //future proofing for addDelete functionality

function modifyDataArray(arrayElement, addDelete){
    if (arrayElement){
        if (addDelete === 'add'){
            dataArray.push(arrayElement);
        }
    }
    return dataArray;
};

// top level domain response PASS
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        return reply('hello world - this is a hapi framework');
    }
});

//echo user input PASS
server.route({
    method: 'GET',
    path: '/echo/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name + '!');
    }
});


//get a list of resources PASS
server.route({
    method: 'GET',
    path:'/resources',
    handler: function (request, reply) {
        return reply(dataArray);
    }
});


//get specific in range resource by number  PASS
server.route({
    method: 'GET',
    path:'/resources/{number}',
    handler: function (request, reply) {
        if ( (request.params.number < 0) || (request.params.number > dataArray.length-1)  ) {
            return reply('Requested Resource Not Available');
        }
        else {
            return reply(dataArray[request.params.number]);
       }
    }
});

//add new resource PASS
server.route({
    method: 'POST'
    , path: '/resources'
    , config: {
        handler: function(request, reply) {
            var arrayElement = {
                name: request.payload.name,
                hobby: request.payload.hobby
            };
            dataArray = modifyDataArray(arrayElement, 'add');
            var outbound =  dataArray[dataArray.length-1] ;
            reply(outbound  );
        }
    }
});

server.dataArray = dataArray;
var app = server;
module.exports = app;