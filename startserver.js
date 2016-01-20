//1
var app = require ('./app.js'); //attaches exported module "app"

// Start the server


app.start((err) => {
    if (err) {
        throw err;
    }

    console.log('Server running at:', app.info.uri);
});