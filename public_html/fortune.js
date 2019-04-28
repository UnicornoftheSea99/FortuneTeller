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


//OTHER STUFF
//document.getElementById("submit").addEventListener("click", attempts)
// attempts();

//MIGHT USE LATER
// function addMessage(msg) {
//     console.log("showing the message");
//     console.log(msg); //show message in console
//     var para = document.createElement("p"); //creates a new paragraph element 
//     para.innerHTML = "user: "+msg.sender;  //in new paragraph elem put in name of client sending message            
//     var element = document.getElementById("mainDiv"); //refer to element in html file with id "mainDiv"
//     element.appendChild(para); //add created paragraph to the existing html element

//     var para = document.createElement("p"); //creates new paragraph element
//     para.innerHTML = "Message: "+msg.message; //in new paragraph element put in message from other client             
//     var element = document.getElementById("mainDiv"); //refer to element in html file with id "mainDiv"
//     element.appendChild(para);//add created paragraph to the existing html element
// }

// function attempts() {
//     console.log("we're here because we're here because we're here")
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onload = function () {
//         if (this.status == 200) {
//             if (this.responseText.length >= 1) {
//                 response = JSON.parse(this.responseText);
//                 console.log(response)
//             }

//         }
//     }
//     // console.log("init");
//     xmlhttp.onerror = function () { alert("Error initializing") };
//     var request = { request: "trial" };
//     xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));  //GET or POST?
//     xmlhttp.send();
// }

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
    var h3 = document.createElement("h3");
    h3.innerHTML = i.q;
    var element = document.getElementById("div1");
    element.appendChild(h3); 

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

function addAnswer(options){
    return options.a;
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

// activated on click of next button
// for now we'll start  with this
// function loadQuestion() {
//     var xmlhttp2 = new XMLHttpRequest();
//     xmlhttp2.onload = getQ;
//     // console.log("init");
//     xmlhttp2.onerror = function () { alert("Error loading start page") };
//     var request = { request: "loadQuestion" }; //will grab question and answer array
//     xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));  //GET or POST?
//     xmlhttp.send();
// }


// /**
//  * All the question showing shtuff
//  */
// function showQ() {
//     var question = document.getElementById("1a");
//     question.innerHTML = questionArr[0];
//     //var qOptions = ?
//     var selectObj = document.getElementById("1b");
//     qOptions.forEach(name => selectObj.options[selectObj.options.length] = new Option(name)); //form? input?
// }

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