/**
 * Author: Neamat  Sabry
 * Description: a file server to serve the different file 
 * formatswe have and read them
 */

// where we read files and it never changes 

// get all the modules we need
http = require('http');
fs = require('fs');
url = require('url');
const path = require('path');

// make our module 
myModule = require('./fileServer.js');

// Error function for when it can't find file
function errFun(res) {
    // write an error on the apge
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Error 404: resource not found.');
    res.end();
}

// create a function in the exports of our module
exports.serveStatic = (res, fileName) => {
    // callback function to read that file
    fs.readFile(fileName, function (err, data) {
        console.log(fileName, "inside fileServer");
        // get the extension of the file
        ext = path.extname(fileName);

        if (err) {
            // call error function
            errFun(res);
        }

        else {
            // make a switch to check for all extensions of the file
            // so we would be able to read it and know its type
            switch (ext) {
                default:
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    break;
                case ".js":
                    res.writeHead(200, { 'Content-Type': 'text/js' });
                    break;
                case ".css":
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    break;
                case ".jpg":
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    break;
                case ".txt":
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    break;
            }

            // write the data and end the response
            res.write(data);
            res.end();
        }
    });
}
