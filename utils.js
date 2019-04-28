
// helping function to use so we can easily send the server our status, 
// our response and the data we have in application/json format
exports.sendJSONObj = function(res, status, data) {
    console.trace();
    res.writeHead(status, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}



// just added this function too because i notied we use it in 
// app.js but it was never created 
exports.sendError = function(res, data) {
    console.trace();
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();
}