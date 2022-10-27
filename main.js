let operator = "";
let previousValue = "";
let currentValue = "";

// Store all components on HTML to JS.
  document.addEventListener("DOMContentLoaded", function () {
    let previousOperand = document.querySelector(".previous-operand");
    let currentOperand = document.querySelector(".current-operand");

    let clear = document.querySelector(".clear");
    let delBtn = document.querySelector(".delete");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal");

    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".number");

// Attaches an event handler to the document.
      numbers.forEach((number) => number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentOperand.textContent = currentValue;
}))

  operators.forEach((op) => op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent)
      previousOperand.textContent = previousValue + " " + operator;
      currentOperand.textContent = currentValue;
}))

  decimal.addEventListener("click", function () {
    addDecimal()
  })

  clear.addEventListener("click", function () {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousOperand.textContent = currentValue;
    currentOperand.textContent = currentValue;
  })

  delBtn.addEventListener("click", function () {
    currentOperand.textContent = '';
  })

  equal.addEventListener("click", function(){
      if (currentValue != '' && previousValue != '') {
      calculate()
      previousOperand.textContent = '';
      if (previousValue.length <= 5){
        currentOperand.textContent = previousValue;
      } else {
        currentOperand.textContent = previousValue.slice(0,5) + "...";
      }
    }
  })
})
// Attaches an event handler to the document END.

// display limit
function handleNumber(num) {
  if (currentValue.length <= 9) {
    currentValue += num;
  }
}

// operator functionality
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

// decimal functionality
function addDecimal() {
   if (!currentValue.includes(".")) {
      currentValue += ".";
   }
}

// main functionality - calculate
function calculate(){
  // convert string to number
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
    if(operator === "+"){
      previousValue += currentValue;
    } else if(operator === "-"){
      previousValue -= currentValue;
    } else if(operator === "*"){
      previousValue *= currentValue;
    } else{
      previousValue /= currentValue;
    } 
  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}
function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}