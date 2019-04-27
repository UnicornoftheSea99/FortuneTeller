// Modules required
var utils = require('./utils.js');
var qf = require('./fortuneTeller.js');
var swig = require('swig');
var fs = require('fs');

var clientID = 0;

// save the processQuery function as an export in our module
exports.processQuery = function (query, res) {
    // check what request we received from the client
    // so we can either upload albums or photos
    switch (query.request) {
        // case "start":
        //     start(res, query);
        //     break;
        case "trial":
            loadQuestion(res, query);
            break;
        // case "loadQuestion":
        //     loadQuestion(res, query);
        //     break;
        // case "getFortune":
        //     getFortuneQuery(res, query);
        //     break;
        // case "answer":
        //     answer(res, query);
        //     break;
        // case "nextQ":
        //     nextQ(res, query);
        //     break;
        // case "reveal":
        //     reveal(res, query);
        //     break;
        default:
            // report error for any other query 
            var errObj = { message: "Query not supported" };
            utils.sendJSONObj(res, 500, errObj);
            break;
    }
}

function loadQuestion(res, query) {
    // generate questions
    questions = qf.generateQs();

    // console.log("these are the question", questions)

    // generate page 
    generatePage(questions, res);

    // send the questions generated to client
    //utils.sendJSONObj(res, 200, questions);
}

// function getFortuneQuery() {
//     // calculate score and get fortune 
//     // generate page

// }

function generatePage(questions, res) {

    swig.renderFile('public_html/index.html', questions, function(err, output){
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            res.write("Error reading questions page");
            res.end();
        } else {
            // console.log(output);
            fs.writeFile('public_html/questions_user'+clientID+'.html', output, function (err) {  
                if (err) {
                    res.writeHead(500, {'Content-Type':'text/html'});
                    res.write("Error customizing questions page");
                    res.end();
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.write('public_html/questions_user'+clientID+'.html');
                    res.end();
                }    
            }); //writeFile     
        }
    }); // renderFile
}