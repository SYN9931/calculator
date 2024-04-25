
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
const keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
//action

        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children)
        .forEach(k=>k.classList.remove('is-depressed'))
        
        if (!action){
            console.log('number key!')
            if (displayedNum === '0' || previousKeyType ==='operator'){
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {console.log('operator key!')
            key.classList.add('is-depressed')
            //Add custom attribute 
            //to tell is an operator key
            calculator.dataset.previousKeyType = 'operator'
            }
        if (
            action === 'decimal') {
            console.log('decimal key!')
            display.textContent = displayedNum + '.'
        }
        if (
            action === 'clear') {
            console.log ('clear key!')
        }
        if (
            action === 'calculate') {
            console.log('equal key!')
        }

        //to release the pressed state of operator key
        //Remove .is-depressed class from all keys
        // Array.from(key.parentNode.children)
        //     .forEach(k=>k.classList.remove('is-depressed'))
    }
})