# hapi_Framework

Hapi.js - January 2016 - Implementing a Hapi.js framework

Part 1 - CRUD Data Methods and file serve

1 Serve html page at root
2 Return any user string entered on /echo/ path.
3 Get a list of resources from an array that is used to represent a file system for this exercise.
4 Put resource (add an object to the array via the api)
5 Get a specific element by number, eg. resource/2
6 Return an error message if requested resource does not exist


Part 2 - Testing

These features are tested by 7 mocha tests
    it('returns index.html file on /',
    it('returns user string on /echo/',
    it('returns 3 item length list when new',
    it('adds one file resource to existing array',
    it('returns 4 item length list after adding element',
    it('should return 3rd element when receives index 2',
    it('returns error message and no resource if requested element out of range',


Part 3 - Comparison of Hapi framework to Express

I have not got a strong feeling about where Hapi differs fundamentally from Express.  I suspect the big differences may be in more advanced features than I have used here.

I found it faster to set up, but this was mostly a function of having experience with Express and Mocha on the previous days.

Looking at Hapi, I think working with it seems simpler.   But I just don't know what is lost if one uses it.



------------------------------------------

Assignment

1) Pick another middleware/server framework and create an example using at least one resource with CRUD and server a general html page as well. Possible alternatives are hapi.js, koa and restify (or any other framework you might find, try googling "express.js alternatives"). Include in your repo in the README.md your critique of the framework particularly in comparison to express.js. You can use any persistence you want including in-memory, but in MUST BE ASYNCHRONOUS.

CRUD data methods: 6pts
Serve a file: 2pts
Testing (chai http): 6pts
README: 6pts

