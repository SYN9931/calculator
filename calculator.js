
//sum
const add = function (a,b){
    return a+b;
}

//subtract
const subtract = function (a,b){
    return a-b;
}

//multiply
const multiply = function (a,b){
    return a*b;
}

//divide 
const divide = function (a,b){
    return a/b;
}

//display on screen button click onto html screen
const screen = document.getElementsById("calculator_display");
const allButtons = document.getElementsByClassName('numpad');

Array.prototype.forEach.call(allButtons, (e) => e.addEventListener('click', () => calculator_display.innerHTML += e.innerHTML));

//clear everything on calculator_display

function clearInput(){
    document.getElementById("calculator_display").value="";
};