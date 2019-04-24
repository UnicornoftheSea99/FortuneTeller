//Jessica Hernandez
//fortuneTeller.js
//fucntion that contains fortunes and assigns values to each one


//Object of fotunes and their values
var fortunes = 
[{fortuneId: 'f1',fortune:'Do not worry too much. Be happy.', totalVal: 10},
{fortuneId: 'f2',fortune:'Do not worry too much. Be happy.', totalVal: 20},
{fortuneId: 'f3',fortune:'Do not worry too much. Be happy.', totalVal: 25},
{fortuneId: 'f4',fortune:'Do not worry too much. Be happy.', totalVal: 5},
{fortuneId: 'f5',fortune:'Do not worry too much. Be happy.', totalVal: 15}
];

//gathers values ffrom each response that the user gives to each question
var Q1 = document.getElementById("1").value;
var Q2 = document.getElementById("2").value;
var Q3 = document.getElementById("3").value;
var Q4 = document.getElementById("4").value;
var Q5 = document.getElementById("5").value;
var Q6 = document.getElementById("6").value;

//total value from the responses of each answer
var totalFortuneValue =  (Q1+Q2+Q3+Q4+Q5+Q6);

//function to figure out which fortune to give back to the user
function findFortune(){
    //iterate through the array 
    
    //when you find the value that corresponds to the totalFortuneValue 
    
    //get the fortune associated with it &  send it back to the client

    //extra comment


    
}

