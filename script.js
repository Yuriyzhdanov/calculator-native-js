const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const resultElement = document.querySelector(".result");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const multyBtn = document.querySelector(".multy");
const dividerBtn = document.querySelector(".divider");

const submitBtn = document.querySelector(".submit");
const entryStringValue = document.querySelector(".string");

let action = "+";

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
multyBtn.onclick = function () {
  action = "*";
};
dividerBtn.onclick = function () {
  action = "/";
};
function entryString(inp1, inp2, text) {
  const value1 = inp1.value;
  const value2 = inp2.value;

  let operationSymbol = ''

  if(action = '+'){
    operationSymbol = '+'
  } else if(action = '-'){
    operationSymbol = '-'
  } else if(action = '*'){
    operationSymbol = '*'
  }else if(action = '/'){
    operationSymbol = '/'
  }

  text.textContent = value1 + " " + operationSymbol +' ' + value2;
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
  entryString(input1, input2, entryStringValue );
  clearInputs();
}

function computeNumWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);

  const num2 = Number(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

function clearInputs() {
  input1.value = "";
  input2.value = "";
}

submitBtn.onclick = function () {
  const result = computeNumWithAction(input1, input2, action);
  printResult(result);
};
