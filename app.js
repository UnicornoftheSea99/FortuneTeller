// Author: Neamat Sabry
// Description: this file starts my server and runs our call back function

// call back function 
// create server and make it listen 
// fileServer = require('./fileServer.js');
http = require('http');

// app require albumQury
qMod = require("./processQuery.js")

// call the servStatic function in my module using an arrow function
// that gives it the request and response it needs
handle_incoming_request = function (req, res) {
    // parse url and query 
    // var path = url.parse(req.url).pathname;
    var queryObj = url.parse(req.url, "true").query;

    // if there was a query given, call our query processing function
    if(queryObj.request){
        qMod.processQuery(queryObj, res);
    }

    // if there was a path given
    if (path && path.length > 1){
        // use file server to open the file 
       fileServer.serveStatic(res, "public_html"+path);
    }
}
// create the server and call function
var server = http.createServer(handle_incoming_request);
// listen to indicated port
server.listen(8080);
