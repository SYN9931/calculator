
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

//display button click onto html screen
const screen = document.getElementById("screen");
const allButtons = document.getElementsByClassName('numpad');

Array.prototype.forEach.call(allButtons, (e) => e.addEventListener('click', () => screen.innerHTML += e.innerHTML));