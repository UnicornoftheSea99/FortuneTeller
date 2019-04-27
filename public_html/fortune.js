//Client Side
//Emily

// init();
// loadQuestion();

document.getElementById("submit").addEventListener("click", attempts)

// attwmpts();

function attempts() {
    console.log("we're here because we're here because we're here")
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        if (this.status == 200) {
            if (this.responseText.length >= 1) {
                response = JSON.parse(this.responseText);
                console.log(response)
            }

        }
    }
    // console.log("init");
    xmlhttp.onerror = function () { alert("Error initializing") };
    var request = { request: "trial" };
    xmlhttp.open("GET", "http://localhost:8080/?" + queryObjectToString(request));  //GET or POST?
    xmlhttp.send();
}

// function startPage(){

// }

// function init(){
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onload = startPage();
//     // console.log("init");
//     xmlhttp.onerror = function () {alert("Error loading start page")};
//     var request = {request:"start"};
//     xmlhttp.open("GET", "http://localhost:8080/?"+queryObjectToString(request));  //GET or POST?
//     xmlhttp.send();
// }

// function startPage() {
//     // load designed page somehow??? separate start page from question pages
// }

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

// // idea is that this would take question from array of questions and load it into header tag using innerHTML
// // similar to albums.js, will have array of question options (maybe array with properties?) that are loaded in
// // instead of having multiple question pages, have same page that different values are loaded into
// function getQ() {
//     if (this.status == 200) {
//         response = JSON.parse(this.responseText);

//         // use this response to show questions
//     }
//     else alert("Error loading question");
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