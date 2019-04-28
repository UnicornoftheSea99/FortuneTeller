//fortuneTeller.js
//fucntion that contains fortunes and assigns values to each one


//Object of fotunes and their values
var fortunes =
    [{ fortuneId: 'f1', fortune: 'Do not worry too much. Be happy.', totalVal: 10 },
    { fortuneId: 'f2', fortune: 'You are a happy person. Kepp doing you, boo.', totalVal: 20 },
    { fortuneId: 'f3', fortune: 'You are a sad cow. Treat yourself to something nice. ', totalVal: 25 },
    { fortuneId: 'f4', fortune: 'You seem unsure of yourself. Try meditating for 5 min every night.', totalVal: 5 },
    { fortuneId: 'f5', fortune: 'You got this! Exercise is a great way to keep your body happy.', totalVal: 15 }
    ];

// can't use document on server side
//gathers values from each response that the user gives to each question
// var Q1 = document.getElementById("1").value;
// var Q2 = document.getElementById("2").value;
// var Q3 = document.getElementById("3").value;
// var Q4 = document.getElementById("4").value;
// var Q5 = document.getElementById("5").value;
// var Q6 = document.getElementById("6").value;

//total value from the responses of each answer
// var totalFortuneValue = (Q1 + Q2 + Q3 + Q4 + Q5 + Q6);



exports.generateQuestions = function () {
    var questions = [{
        q: "How do you feel today?",
        option: [{ a: "Happy", value: 4 }, { b: "Angry", value: 1 }, { c: "Sad", value: 2 }, { d: "Tired", value: 3 }]
    },
    {
        q: "Which animal most describes your personality?",
        option: [{ a: "fish", value: 3 }, { b: "cat", value: 2 }, { c: "bird", value: 4 }, { d: "cameleon", value: 1 }]
    }
        // ,{q: " ",
        //     option: [{a: " ", value: 1},{b: " ", value: 1},{c: " ", value: 1},{d: " ", value: 1}] },
    ] // end of questions

    choices = [];

    //choose six questions
    while (choices.length < 6) {
        magicNumber = Math.floor(Math.random) + 6;
        choices.push(questions[magicNumber].q);
    }

    return choices;

    //eventually we will have a randomizer that will choose 6 unique questions from the set of 20
    Q1 = choices[1].q;
    document.getElementById('q1').innerHTML(Q1);
}

//function to figure out which fortune to give back to the user
function getFortune() {
    //iterate through the array 

    //when you find the value that corresponds to the totalFortuneValue 

    //get the fortune associated with it &  send it back to the client



};


