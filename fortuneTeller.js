//fortuneTeller.js
//fucntion that contains fortunes and assigns values to each one


//Object of fotunes and their values
var fortunes =
    [
        { fortuneId: 'f1', fortune: 'Do not worry too much. Be happy.', totalVal: 10 },
        { fortuneId: 'f2', fortune: 'You are a happy person. Kepp doing you, boo.', totalVal: 20 },
        { fortuneId: 'f3', fortune: 'You are a sad cow. Treat yourself to something nice. ', totalVal: 25 },
        { fortuneId: 'f4', fortune: 'You seem unsure of yourself. Try meditating for 5 min every night.', totalVal: 5 },
        { fortuneId: 'f5', fortune: 'You got this! Exercise is a great way to keep your body happy.', totalVal: 15 }
    ];

//total value from the responses of each answer
// var totalFortuneValue = (Q1 + Q2 + Q3 + Q4 + Q5 + Q6);

/* <button id="1" onClick="reply_click(this.id)">B1</button>
<button id="2" onClick="reply_click(this.id)">B2</button>
<button id="3" onClick="reply_click(this.id)">B3</button> */

// function reply_click(clicked_id) {
//     return clicked_id;
// }

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


//function to figure out which fortune to give back to the user
exports.getFortune = function(values) {
    return fortunes[0].fortune;
};


