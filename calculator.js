
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

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('calculator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
//action
    }
})