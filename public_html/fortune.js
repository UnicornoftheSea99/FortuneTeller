
//Client Side
//Emily

//Image Sources
//https://tenor.com/view/dontworry-behappy-advice-smile-love-gif-4513921
//https://weheartit.com/chati_compartir_6/collections/111201363-gif
//https://gifer.com/en/DW0Q
//https://giphy.com/gifs/art-cute-penguin-1isg011pZn7LSIh4ig
//https://tenor.com/view/fit-personalpenguintrainer-penguin-trainer-healthylifestyle-gif-4817050

//this is what happens after client clicks submit button
function check() {

    //Object of fortunes and their values
    var fortunes =
    [
    { fortuneId: 'f1', fortune: 'Do not worry too much. Be happy.'},
    { fortuneId: 'f2', fortune: 'You are a happy person. Kepp doing you, boo.'},
    { fortuneId: 'f3', fortune: 'You are a sad cow. Treat yourself to something nice. '},
    { fortuneId: 'f4', fortune: 'You seem unsure of yourself. Try meditating for 5 min every night.'},
    { fortuneId: 'f5', fortune: 'You got this! Exercise is a great way to keep your body happy.'}
    ];

    var pictures =
    [
        "img/f1.gif","img/f2.gif","img/f3.gif", "img/f4.gif","img/f5.gif"
    ]

    // var q1 = document.quiz.question1.value; //this is the answer client pick to question 1
    //var Q1=parseInt(q1);
    // var q2 = document.quiz.question2.value;
    // var Q2=parseInt(q2);
    // var q3 = document.quiz.question3.value;
    // var Q3=parseInt(q3);
    // var q4 = document.quiz.question4.value;
    // var Q4=parseInt(q4);
    // var q5 = document.quiz.question5.value;
    // var Q5=parseInt(q5);
    // var q6 = document.quiz.question6.value;
    // var Q6=parseInt(q6);

    //total value from the responses of each answer
    // var totalFortuneValue = (Q1 + Q2 + Q3 + Q4 + Q5 + Q6);

    //add if statements here to set range, which is index of fortunes and pictures
    //example:
    //var range;
    //if (totalFortuneValue>=10){
        //range=1;
    //}

    //makes whatever is in the aftersubmit div in html show up once this function called
    document.getElementById("aftersubmit").style.visibility = "visible";

    //23:50 in video
    //HOW TO GET FORTUNES TO SHOW UP AT THE END
    //fortunes is the array of fortunes, found in fortuneTeller.js
    //range (right now 0) is the index
    document.getElementById("message").innerHTML = fortunes[0].fortune;

    //how to get images to show up with each fortune
    //pictures is an array of picture names, which are in a file in public html
    //range is index
    document.getElementById("picture").src = pictures[0];
}

init();

function init() {
    console.log("we're here")
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadQs;
    xmlhttp.onerror = function () { alert("Error loading start page") };
    var request = { request: "getQs" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));
    xmlhttp.send();
}

function loadQs() {
    // load designed page 
    if (this.status == 200) {
        response = JSON.parse(this.responseText);
        response.forEach(addQ);
    }

    else alert("Error loading question");
}

function addQ(obj) {
    var field = document.createElement("fieldset");
    var element = document.getElementById("form");
    element.appendChild(field);
    var mybr = document.createElement('br');
    element.appendChild(mybr);

    var question = document.createElement("legend");
    question.innerHTML = obj.q;
    field.appendChild(question);

    obj.option.forEach(function (x) {
        var ops = document.createElement("input");
        ops.type = "radio";
        ops.id = "ops";
        ops.name = "options";  //this needs to be different for each question so can choose multiple. in accordance with code, would be "question1", "question2"...
        //value also needs to be saved
        //needs to be able to be retrieved by document.quiz.question1.value;
        field.appendChild(ops);
        

        var label = document.createElement("label");
        label.for = "ops";
        label.innerHTML = x[Object.keys(x)[0]];
        field.appendChild(label);

        var br = document.createElement("br");
        field.appendChild(br);
    })
}

//not needed? can just do within fortune.js
function getFortune() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadFortune;
    xmlhttp.onerror = function () { alert("Error loading start page") };
    var request = { request: "getFortune", value: "answer" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));  
    xmlhttp.send();
}

//not needed?
function loadFortune() {
    if (this.status == 200) {
        // just a string now because i have one question
        response = this.responseText;
        var h3 = document.createElement("h3");
        h3.innerHTML = response;
        // then get our div and add the paragraph to it
        var element = document.getElementById("message");
        element.appendChild(h3);
    }
}

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