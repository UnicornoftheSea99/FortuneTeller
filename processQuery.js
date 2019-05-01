// Modules required
var utils = require('./utils.js'),
    qf = require('./fortuneTeller.js'),
    fs = require('fs');

// id of the first client
var currentId = 0;

// save the processQuery function as an export in our module
exports.processQuery = function (query, res) {
    // check what request we received from the client
    // so we can either upload albums or photos
    switch (query.request) {
        case "getQs":
            loadQuestion(res);
            break;
        case "getFortune":
            getFortune(res, query);
            break;
        case "getScore":
            getScore(res, query);
            break;
        default:
            // report error for any other query 
            var errObj = { message: "Query not supported" };
            utils.sendJSONObj(res, 500, errObj);
            break;
    }
}

function loadQuestion(res) {
    // generate questions
    questions = qf.generateQs();

    // console.log("these are the question", questions)

    // generate page 
    // generatePage(questions, res);

    // send the questions generated to client
    utils.sendJSONObj(res, 200, questions);
}

function getFortune(res, query) {
    values = query.value;
    fortune = qf.getFortune(values);
    utils.sendJSONObj(res, 200, fortune);
}