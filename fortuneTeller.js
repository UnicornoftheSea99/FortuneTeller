//fortuneTeller.js
//fucntion that contains fortunes and assigns values to each one



exports.generateQs = function () {
    var questions = [
    {
        q: "How do you feel today?",
        option: [{ a: "Happy", value: 4 }, { b: "Angry", value: 1 }, { c: "Sad", value: 2 }, { d: "Tired", value: 3 }]
    },
    {
        q: "Which animal most describes your personality?",
        option: [{ a: "fish", value: 3 }, { b: "cat", value: 2 }, { c: "bird", value: 4 }, { d: "cameleon", value: 1 }]
    }
    ]

    // choices = [];
    //choose six questions
    // while (choices.length < 6) {
    //     magicNumber = Math.floor(Math.random) + 6;
    //     choices.push(questions[magicNumber].q);
    // }

    // return choices;
    return questions;
}

//functionality moved to fortune.js
//function to figure out which fortune to give back to the user
exports.getFortune = function(values) {
    return fortunes[0].fortune;
};


