let operator = '';
let previousValue = '';
let currentValue = '';
// Store all components on HTML to JS.
document.addEventListener("DOMContentLoaded", function(){
    let previousOperand = document.querySelector(".previous-operand");
    let currentOperand = document.querySelector(".current-operand");

    let clear = document.querySelector(".all-clear");
    let delBtn = document.querySelector(".delete");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal");

    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".number");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentOperand.textContent = currentValue;
    }))
})

function handleNumber(num){
    if(currentValue.length <= 10){
        currentValue += num;
    }
}