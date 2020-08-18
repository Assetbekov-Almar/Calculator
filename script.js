const display = document.querySelector('textarea');
const numbers = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const decimal = document.querySelector('#decimal');
let displayVal = '0';
let temp;
let array = [];
let fixedNumbers =  Array.from(numbers);
fixedNumbers.forEach(element =>element.addEventListener('click',update));

let fixedOperators = Array.from(operators);
fixedOperators.forEach(element =>element.addEventListener('click',perform));

function update(e) {
  let number1 = e.target.innerText;
    if (displayVal === '0') displayVal = '';
  displayVal += number1;
  display.innerText = displayVal;
    }       
        
function perform(e) {
    let operator = e.target.innerText;
    switch(operator) {
        case '+':    
        if(array.length == 2) {
            array.push(displayVal);
            displayVal = '0';
            display.innerText = displayVal;
            temp = operate(array[0],array[1],array[2]);
            array =[];
            array.push(temp);
            array.push('+');
            break;
        }  else {
            temp = displayVal;
            displayVal = '0';
            display.innerText = displayVal;
            array.push(temp);
            array.push('+');
            break;
        }
        case '-':
            if(array.length == 2) {
                array.push(displayVal);
                displayVal = '0';
                display.innerText = displayVal;
                temp = operate(array[0],array[1],array[2]);
                array =[];
                array.push(temp);
                array.push('-');
                break;
            } else {
            temp = displayVal;
            displayVal = '0';
            display.innerText = displayVal;
            array.push(temp);
            array.push('-');
            break;
            }
        case '*':
            if(array.length == 2) {
                array.push(displayVal);
                displayVal = '0';
                display.innerText = displayVal;
                temp = operate(array[0],array[1],array[2]);
                array =[];
                array.push(temp);
                array.push('*');
                break;
            } else {
            temp = displayVal;
            displayVal = '0';
            display.innerText = displayVal;
            array.push(temp);
            array.push('*');
            break;
            }
        case '/':
            if(array.length == 2) {
                array.push(displayVal);
                displayVal = '0';
                display.innerText = displayVal;
                temp = operate(array[0],array[1],array[2]);
                array =[];
                array.push(temp);
                array.push('/');
                break;
            } else {
            temp = displayVal;
            displayVal = '0';
            display.innerText = displayVal;
            array.push(temp);
            array.push('/');
            break;
            }
        case '=':
            array.push(displayVal);
            if(array.length == 3) {
            displayVal = operate(array[0],array[1],array[2]);
            display.innerText = displayVal;
            array =[];
            } else {
                 display.innerText = "Error";
                 array =[];
            }
    }
}

function operate(num1, op, num2) {
    switch(op) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
            break;
         case '-':
            return parseFloat(num1) - parseFloat(num2); 
            break;
        case '*':
            return parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            let res = parseFloat(num1) / parseFloat(num2);
            if(num2 == '0') {
                display.innerText = 'Cannot divide by zero';
                break;
            }
            return res;
            break;
    }
}

   
clear.addEventListener("click", ()=> {
    displayVal = '0'
    display.innerText = displayVal;
    array = [];
    temp = undefined;
})

del.addEventListener('click', () => {
    let displayLength = displayVal.length;
    displayVal = displayVal.slice(0,displayLength-1);
    if (displayVal === '') displayVal = '0';
    display.innerText = displayVal;
});

decimal.addEventListener('click', () => {
    if(!displayVal.includes('.')) displayVal += '.';
    display.innerText = displayVal;
})
   


window.addEventListener('keypress',keys);
function keys(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    display.textContent += key.textContent;
} 


