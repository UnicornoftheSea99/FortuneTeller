// Client Side
// Emily

// Image Sources
// https://tenor.com/view/dontworry-behappy-advice-smile-love-gif-4513921
// https://weheartit.com/chati_compartir_6/collections/111201363-gif
// https://gifer.com/en/DW0Q
// https://giphy.com/gifs/art-cute-penguin-1isg011pZn7LSIh4ig
// https://tenor.com/view/fit-personalpenguintrainer-penguin-trainer-healthylifestyle-gif-4817050

// this is what happens after client clicks submit button
function check() {
    //Object of fortunes and their values
    var fortunes =
    [
        { fortuneId: 'f1', fortune: 'Do not worry too much. Be happy.' },
        { fortuneId: 'f2', fortune: 'You are a happy person. Kepp doing you, boo.' },
        { fortuneId: 'f3', fortune: 'You are a sad cow. Treat yourself to something nice. ' },
        { fortuneId: 'f4', fortune: 'You seem unsure of yourself. Try meditating for 5 min every night.' },
        { fortuneId: 'f5', fortune: 'You got this! Exercise is a great way to keep your body happy.' }
    ];

    var pictures =
    [
        "img/f1.gif", "img/f2.gif", "img/f3.gif", "img/f4.gif", "img/f5.gif"
    ]

    var q1 = document.quiz.question1.value; //this is the answer client pick to question 1
    var Q1=parseInt(q1);
    if (isNaN(Q1)){
        var Q1=0;
    }
    var q2 = document.quiz.question2.value;
    var Q2=parseInt(q2);
    if (isNaN(Q2)){
        var Q2=0;
    }
    var q3 = document.quiz.question3.value;
    var Q3=parseInt(q3);
    if (isNaN(Q3)){
        var Q3=0;
    }
    var q4 = document.quiz.question4.value;
    var Q4=parseInt(q4);
    if (isNaN(Q4)){
        var Q4=0;
    }
    var q5 = document.quiz.question5.value;
    var Q5=parseInt(q5);
    if (isNaN(Q5)){
        var Q5=0;
    }
    var q6 = document.quiz.question6.value;
    var Q6=parseInt(q6);
    if (isNaN(Q6)){
        var Q6=0;
    }

    console.log("Q1: " + Q1)
    console.log("Q2: " + Q2)
    console.log("Q3: " + Q3)
    console.log("Q4: " + Q4)
    console.log("Q5: " + Q5)
    console.log("Q6: " + Q6)

//    var scores= {Q1,Q2,Q3,Q4,Q5,Q6};
//    //console.log(scores[1]);
//    for (q in scores){
//        console.log(q);
//        if (isNaN(q)==true){
//            if (q=="Q1"){
//             var Q1=0;
//            }
//         }
//    }

    //total value from the responses of each answer
    var totalFortuneValue = (Q1 + Q2 + Q3 + Q4 + Q5 + Q6);
    console.log("total value is"+ totalFortuneValue);


    //figure out which fortune
    var range;
    if ((totalFortuneValue<=10)){
        range=0;
    }
    if (totalFortuneValue<=14 && totalFortuneValue>10){
        range=1;
    }
    if (totalFortuneValue<=18 && totalFortuneValue>14){
        range=2;
    }
    if (totalFortuneValue<=22 && totalFortuneValue>18){
        range=3;
    }
    if (totalFortuneValue<25 && totalFortuneValue>22){
        range=4;

    }

    //makes whatever is in the aftersubmit div in html show up once this function called
    document.getElementById("aftersubmit").style.visibility = "visible";

    //how to make fortunes appear
    document.getElementById("message").innerHTML = fortunes[range].fortune;

    //how to get images to show up with each fortune
    //pictures is an array of picture names, which are in a file in public html
    //range is index
    document.getElementById("picture").src = pictures[range];
}

// start init function the moment the page starts
init();

function init() {
    console.log("we're here")

    // create new AJAX object
    var xmlhttp = new XMLHttpRequest();

    // call the loadQ function once it's loaded
    xmlhttp.onload = loadQs;

    // error handling
    xmlhttp.onerror = function () { alert("Error loading start page") };

    // send server the getQs request 
    var request = { request: "getQs" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));
    xmlhttp.send();
}
// load questions onto page
function loadQs() {
    // if the ajax status is a success
    if (this.status == 200) {
        // parse it to be an object
        response = JSON.parse(this.responseText);
        // initialize this variable at 1 to be used to later
        counter = 0;
        response.forEach(addQ, counter);
    }

    // error handling
    else alert("Error loading question");
}

// function to add questions to html
function addQ(obj, counter) {
    // increment counter
    counter ++;

    // insert a fieldset to our first div
    var field = document.createElement("fieldset");
    var element = document.getElementById("quiz");
    element.appendChild(field);

    // insert a break
    var mybr = document.createElement('br');
    element.appendChild(mybr);

    // insert a legend and add our question (from the server's response)
    // as its innerHTML
    var question = document.createElement("legend");
    question.innerHTML = obj.q;
    field.appendChild(question);

    // loop through each set of answers and 
    // to page for every question
    obj.option.forEach(function (x) {
        // insert inputas a radio button
        var ops = document.createElement("input");
        ops.type = "radio";

        // make sure each has a unique name 
        ops.name = "question" + counter;
        // add the value field of server response to input as a value
        ops.value = x.value;
        // ops.id = x.value;
        // ops.name = "ops" + counter;
        field.appendChild(ops);

        // insert label to input we just created
        var label = document.createElement("label");
        label.for = ops.id;
        label.innerHTML = x[Object.keys(x)[0]];
        field.appendChild(label);

        // insert another break
        var br = document.createElement("br");
        field.appendChild(br);
    })
}

/**
 * The following commented code is the server and client side
 * version of generating fortunes for client
 */

// function getValueOfAnswers() {
//     // query selector loops through all elements that are inputs, with the
//     // corresponding name, whether it's selected and saves its id
//     val1 = document.querySelector('input[name="ops1"]:checked');
//     val2 = document.querySelector('input[name="ops2"]:checked');
//     val3 = document.querySelector('input[name="ops3"]:checked');
//     val4 = document.querySelector('input[name="ops4"]:checked');
//     val5 = document.querySelector('input[name="ops5"]:checked');
//     val6 = document.querySelector('input[name="ops6"]:checked');

//     vals = [val1, val2, val3, val4, val5, val6]

//     console.log(val1)

//     vals.forEach(function (x) {
//         if (!x.id) {
//             // exit if one value is null
//             return;
//         }

//         // change its id to a number and save
//         x = parseInt(x.id);
//     });

//     console.log(vals);

//     // find some of all values and return
//     totalVal = val1 + val2 + val3 + val4 + val5 + val6;
//     return totalVal;
// }

//not needed? can just do within fortune.js
// function getFortune() {
//     console.log("we're in here too")
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onload = loadFortune;
//     xmlhttp.onerror = function () { alert("Error loading start page") };

//     if (!getValueOfAnswers) {
//         // alert client and exit
//         alert("You have to answer all questions!");
//         return;
//     }

//     totalVal = getValueOfAnswers();

//     var request = { request: "getFortune", value: totalVal };

//     xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));
//     xmlhttp.send();
// }

// //not needed?
// function loadFortune() {
//     if (this.status == 200) {
//         // just a string now because i have one question
//         response = JSON.parse(this.responseText);
//         showFortune(response);
//     }
// }

// function showFortune(response) {
//     var fortune = document.createElement("h3");
//     fortune.innerHTML = response.fortune;
//     var div = document.getElementById("div");
//     div.appendChild(fortune);

//     var elem = document.createElement("img");
//     elem.setAttribute("src", response.pic);
//     elem.setAttribute("alt", "Flower");
//     div.appendChild(elem);
// }

///////////////////////////////////////////////////////////

function queryObjectToString(query) {
    // console.log(query);
    var properties = Object.keys(query);
    var arrOfQuesryStrings = properties.map(prop => prop + "=" + handleSpaces(query[prop].toString()));
    // console.log(arrOfQuesryStrings.join('&'));
    return (arrOfQuesryStrings.join('&'));
}

function handleSpaces(str) {
    var newStr = "";
    for (k = 0; k < str.length; k++) {

        if (str[k] == " ")
            newStr += "+";
        else
            newStr += str[k];
    }
    return newStr;
}

document.getElementById("button").addEventListener("click", getFortune);
