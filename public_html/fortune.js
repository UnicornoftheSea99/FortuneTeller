//Client Side
//Emily

// init();
// loadQuestion();

//this is what happens after client clicks submit button
function check() {
    var1=document.quiz.question1.value; //this is the answer client pick to question 1

    //makes whatever is in the aftersubmit div in html show up once this function called
    document.getElementById("aftersubmit").style.visibility = "visible";

    //23:50 in video
    //HOW TO GET FORTUNES TO SHOW UP AT THE END
    //fortunes is the array of fortunes, found in fortuneTeller.js
    //range is the index
    document.getElementById("message").innerHTML=fortunes[range];

    //how to get images to show up with each fortune
    //pictures is an array of picture names, which are in a file in public html
    //range is index
    document.getElementById("picture").src=pictures[range];
}

init();

function init() {
    console.log("we're here")
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadQs;
    xmlhttp.onerror = function () { alert("Error loading start page") };
    var request = { request: "getQs" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));  //GET or POST?
    xmlhttp.send();
}

function loadQs() {
    // load designed page 
    if (this.status == 200) {
        // just a string now because i have one question
        response = JSON.parse(this.responseText);
        response.forEach(addQ);
    }

    else alert("Error loading question");
}

function addQ(i) {
    // questions 
    var h3 = document.createElement("legend");
    console.log(i.q)
    h3.innerHTML = i.q;
    var element = document.getElementById("div1");
    element.appendChild(h3); 

    var h3 = document.createElement("input");
    h3.type = "radio";
    h3.id = "h3"
    var element = document.getElementById("div1");
    element.appendChild(h3);

    var label = document.createElement("label");
    label.for = "h3";
    label.innerHTML = "chaou";
    var element = document.getElementById("div1");
    element.appendChild(label);

    // var h3 = document.createElement("h3");
    // one = i.option.forEach(function(x){
    //     console.log( x[Object.keys(x)[0]])
    //     h3.innerHTML = x[Object.keys(x)[0]];
    // })

    // answer = i.option[0].a;
    // h3.innerHTML = answer;

    // console.log(i.option)
    // for(answers in i.option) {
    //     h3.innerHTML = answers.a;
    // }

    // var element = document.getElementById("2");
    // element.appendChild(h3); 
}

function getFortune() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadFortune;
    xmlhttp.onerror = function () { alert("Error loading start page") };
    var request = { request: "getFortune", value: "answer" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));  //GET or POST?
    xmlhttp.send();
}

function loadFortune() {
    if (this.status == 200) {
        // just a string now because i have one question
        response = this.responseText;
        var h3 = document.createElement("h3");
        h3.innerHTML = response;
        // then get our div and add the paragraph to it
        var element = document.getElementById("2");
        element.appendChild(h3);
    }
}

// needed to make AJAX request work
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