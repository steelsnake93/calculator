let operator = "";
let previousValue = "";
let currentValue = "";
// Store all components on HTML to JS.
document.addEventListener("DOMContentLoaded", function () {
  let previousOperand = document.querySelector(".previous-operand");
  let currentOperand = document.querySelector(".current-operand");

  let clear = document.querySelector(".all-clear");
  let delBtn = document.querySelector(".delete");
  let decimal = document.querySelector(".decimal");
  let equal = document.querySelector(".equal");

  let operators = document.querySelectorAll(".operator");
  let numbers = document.querySelectorAll(".number");

  // Attaches an event handler to the document.
  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentOperand.textContent = currentValue;
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousOperand.textContent = previousValue + " " + operator;
      currentOperand.textContent = currentValue;
    })
  );

  decimal.addEventListener("click", function () {
    addDecimal();
  });

  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousOperand.textContent = currentValue;
    currentOperand.textContent = currentValue;
  });

  delBtn.addEventListener("click", function () {
    currentOperand.textContent = "";
  });

  equal.addEventListener("click", function () {
    calculate();
  });
});
// Attaches an event handler to the document END.

// display limit
function handleNumber(num) {
  if (currentValue.length <= 10) {
    currentValue += num;
  }
}

// operator functionality
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

// decimal functionality
function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}

// main functionality - calculate
function calculate() {
  // convert string to number
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  console.log(previousValue);
}
