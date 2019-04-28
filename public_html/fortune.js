//Client Side
//Emily

// init();
// loadQuestion();

// document.getElementById("start").addEventListener("click", init);
//document.getElementById("submit").addEventListener("click", getFortune);

// attwmpts();

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