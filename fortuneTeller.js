//fortuneTeller.js
//array that holds all question objects that can be given back to the client to answer, upon request
//each quetions object contains the question and a set of options the client can choose from to answer it
//each option is given a value that wil be used to find a final totalValue so we can match it to its corresponding fortune.
var questions = [
    {
        q: "How do you feel today?",
        option: [{ a: "Happy", value: 4 }, { b: "Angry", value: 1 }, { c: "Sad", value: 2 }, { d: "Tired", value: 3 }]
    },
    {
        q: "What is your preferred drink?",
        option: [{ a: "water", value: 1 }, { b: "Coffee", value: 3 }, { c: "Cocktail", value: 4 }, { d: "Tea", value: 2 }]
    },
    {
        q: "Which location most accurately describes where you would rather be right now?",
        option: [{ a: "I'm happy right where I am", value: 4 }, { b: "Far, Far Away from all responsibilities", value: 1 }, { c: "In bed, sleeping", value: 2 }, { d: "Tropical Vacation", value: 3 }]
    },
    {
        q: "Pick a color.",
        option: [{ a: "Red", value: 4 }, { b: "Purple", value: 3 }, { c: "Teal", value: 2 }, { d: "Yellow", value: 1 }]
    },
    {
        q: "What is your ideal vacation?",
        option: [{ a: "Disney World", value: 3 }, { b: "Hawaii", value: 1 }, { c: "Anywhere, as long as I'm with the people I love", value: 4 }, { d: "A winter wonderland", value: 2 }]
    },
    {
        q: "What worries you?",
        option: [{ a: "Everyday responsibilities", value: 4 }, { b: "School/Work", value: 3 }, { c: "Family", value: 2 }, { d: "Nothing at all.", value: 1 }]
    },
    {
        q: "Choose your element.",
        option: [{ a: "Fire", value: 4 }, { b: "Air", value: 1 }, { c: "Water", value: 3 }, { d: "Earth", value: 2 }]
    },
    {
        q: "Apples or Oranges?",
        option: [{ a: "Apples", value: 3 }, { b: "Oranges", value: 2 }, { c: "Both", value: 4 }, { d: "Neither", value: 1 }]
    },
    {
        q: "What would your super power be?",
        option: [{ a: "Invisiblity", value: 1 }, { b: "Flying", value: 4 }, { c: "Super speed ", value: 3 }, { d: "Read minds", value: 2 }]
    },
    {
        q: "Choose a letter.",
        option: [{ a: "A", value: 1 }, { b: "B", value: 3 }, { c: "C", value: 4 }, { d: "D", value: 2 }]
    },
    {
        q: "What do your weekends look like?",
        option: [{ a: "Studying/Working", value: 4 }, { b: "Party", value: 2 }, { c: "Out with friends", value: 3 }, { d: "Unproductive", value: 1 }]
    },

    {
        q: "Pick a fruit. ",
        option: [{ a: "Pineapple", value: 3 }, { b: "Watermelon", value: 1 }, { c: "Lemon", value: 4 }, { d: "Strawberry", value: 2 }]
    },
    {
        q: "What is your dream?",
        option: [{ a: "Famous", value: 4 }, { b: "To be rich", value: 1 }, { c: "Find true love", value: 2 }, { d: "To be the smartest person in your field", value: 1 }]
    },
    {
        q: "What would you rather do in your free time?",
        option: [{ a: "Exercise", value: 3 }, { b: "Watch a movie", value: 1 }, { c: "Sleep", value: 1 }, { d: "Read a book", value: 4 }]
    },
    {
        q: "what is your favorite season??",
        option: [{ a: "Fall", value: 1 }, { b: "Summer", value: 2 }, { c: "Winter", value: 1 }, { d: "Spring", value: 3 }]
    },
    {
        q: "Whatt is your biggest pet peeve?",
        option: [{ a: "Loud chewing", value: 4 }, { b: "Bad grammar", value: 3 }, { c: "Talking in a quiet place", value: 2 }, { d: "People who talk too slow", value: 1 }]
    },
    {
        q: "What are you most afraid of?",
        option: [{ a: "Death", value: 3 }, { b: "Heights", value: 4 }, { c: "Nothing scares me", value: 1 }, { d: "Small Spaces", value: 2 }]
    },
    {
        q: "How do you get places?",
        option: [{ a: "Walking", value: 1 }, { b: "Train", value: 4 }, { c: "Bus", value: 3 }, { d: "Car", value: 2 }]
    },
    {
        q: "How would you break up with someone?",
        option: [{ a: "With a phone call", value: 2 }, { b: "via text-message/email", value: 4 }, { c: "Ghosting them", value: 3 }, { d: "In person", value: 1 }]
    },
    {
        q: "Which animal most describes your personality?",
        option: [{ a: "fish", value: 3 }, { b: "cat", value: 2 }, { c: "bird", value: 4 }, { d: "cameleon", value: 1 }]
    }
]
//an array that holds all the possible fortunes that the client could recieve upon answering all questions given to them.
var fortunes =
    [
        { fortuneId: 'f1', fortune: 'Do not worry too much. Be happy.' },
        { fortuneId: 'f2', fortune: 'You are a happy person. Keep doing you, boo.' },
        { fortuneId: 'f3', fortune: 'You are a sad cow. Treat yourself to something nice. ' },
        { fortuneId: 'f4', fortune: 'You seem unsure of yourself. Try meditating for 5 min every night.' },
        { fortuneId: 'f5', fortune: 'You got this! Keep your head held up high.' }
    ];
//an array that holds a set of gifs that correspond to the a particular fortune and will be delivered together with the fortune.
var pictures = ["img/f1.gif", "img/f2.gif", "img/f3.gif", "img/f4.gif", "img/f5.gif", "img/f6.g"];

//function that exports the 
exports.generateQs = function () { 
    choices = []; //empty array that will hold the questions given to the client to answer
    numbers = [];//empty array that will hold the random numbers generated so that we do not pick a question from the questions array at that index.

    // choose six questions
    while (choices.length < 6) { //while our array of 
        console.log(choices.length);
        magicNumber = Math.floor(Math.random() * 20);
        console.log(magicNumber);
        if (numbers.indexOf(magicNumber) < 0) {
            choices.push(questions[magicNumber]); //adds the question to the choices array that will be given to the client
            numbers.push(magicNumber); //adds the random number generated to the numbers array to ensure we don't get any repeats of the same question.
        }
    }

    return choices; //returns the array, now filled with 6 unique questions back to the client to answer.
}

// function to figure out which fortune to give back to the user
exports.getFortune = function (totalVal) {
    //default value
    i = 4;

    // if total value of fortune is in the range of .... then return the corresponding 
    if (between(totalVal, 10, 14)) {
        i = 0;
    }

    if (between(totalVal, 16, 20)) {
        i = 1;
    }

    if (between(totalVal, 6, 10)) {
        i = 2;
    }

    if (between(totalVal, 14, 16)) {
        i = 3;
    }

    // if(between(totalVal, 20, 24)) {
    //     i = 4;
    // }

    return { fortune: fortunes[i].fortune, pic: pictures[i] }; // returns the fortune and fortune gif 
};

function between(x, min, max) { // checks whether x is between two values, returns true or false
    return x >= min && x <= max;
}


