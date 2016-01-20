Hapi.js - January 2016

Implementing a Hapi.js framework

The project exercises various CRUD methods...

1 Get resource at root path
2 Return any user string entered on /echo/ path.
3 Get a list of resources from an array that is used to represent a file system just for this exercise.
4 Put resource (add an object to the array via the api)
5 Get a specific element when it is indicated by number
6 Return an eror message if requested resource does not exist

These features are tested by 7 mocha tests
    it('responds with welcome message on root path',
    it('returns user string on /echo/',
    it('returns 3 item length list when new',
    it('adds one file resource to existing array',
    it('returns 4 item length list after adding element',
    it('should return 3rd element when receives index 2',
    it('returns error message and no resource if requested element out of range',

Comparison of Hapi framework to Express

I have not got a strong feeling about where Hapi differs fundamentally from Express.  I suspect the big differences may be in more advanced features than I have used here.


