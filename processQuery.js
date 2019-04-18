// save the processQuery function as an export in our module
exports.processQuery = function (query, res) {
    // check what request we received from the client
    // so we can either upload albums or photos
    switch (query.request) {
        case "start":
            start(res, query);
            break;
        case "answer":
            answer(res, query);
            break;
        case "nextQ":
            nextQ(res, query);
            break;
        case "reveal":
            reveal(res, query);
            break;
        default:
            // report error for any other query 
            var errObj = { message: "Query not supported" };
            utils.sendJSONObj(res, 500, errObj);
            break;
    }

}