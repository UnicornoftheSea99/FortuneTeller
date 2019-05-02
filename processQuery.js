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
        // query to generate questions
        case "getQs":
            loadQuestion(res);
            break;
        // case "getFortune":
        //     getFortune(res, query);
        //     break;
        default:
            // report error for any other query 
            var errObj = { message: "Query not supported" };
            utils.sendJSONObj(res, 500, errObj);
            break;
    }
}

/**
 * Function that receives 6 generated questions from another
 * module and sends them back to client
 * @param {*} res response to send client
 */
function loadQuestion(res) {
    // generate questions
    questions = qf.generateQs();

    // send the questions generated to client
    utils.sendJSONObj(res, 200, questions);
}

/**
 * Server side version of generating fortune
 */
// function getFortune(res, query) {
//     totalVal = query.value;
//     fortune = qf.getFortune(totalVal);
//     utils.sendJSONObj(res, 200, fortune);
// }
