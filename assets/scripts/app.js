const ADD_OPERATOR = 'ADD';
const SUBTRACT_OPERATOR = 'SUBTRACT';
const MULTIPLY_OPERATOR = 'MULTIPLY';
const DIVIDE_OPERATOR = 'DIVIDE';


const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Me trying😎
function createAndWriteOutput01(operator) {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} ${operator} ${enteredNumber}`;
  if (operator === '+') {
    currentResult = currentResult + enteredNumber;
  } else if (operator === '-') {
    currentResult = currentResult - enteredNumber;
  } else if (operator === '/') {
    currentResult = currentResult / enteredNumber;
  } else if (operator === '*') {
    currentResult = currentResult * enteredNumber;
  }
  outputResult(currentResult, calcDescription);
}

// After we learn about if statement
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (
    (calculationType !== ADD_OPERATOR &&
      calculationType !== SUBTRACT_OPERATOR &&
      calculationType !== MULTIPLY_OPERATOR &&
      calculationType !== DIVIDE_OPERATOR) ||
    !enteredNumber
  ) {
    return;
  }

  let operationIdentifier;
  if (calculationType === ADD_OPERATOR) {
    currentResult += enteredNumber;
    operationIdentifier = '+';
  } else if (calculationType === SUBTRACT_OPERATOR) {
    currentResult -= enteredNumber;
    operationIdentifier = '-';
  } else if (calculationType === DIVIDE_OPERATOR) {
    currentResult /= enteredNumber;
    operationIdentifier = '/';
  } else if (calculationType === MULTIPLY_OPERATOR) {
    currentResult *= enteredNumber;
    operationIdentifier = '*';
  }
  createAndWriteOutput(operationIdentifier, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // form vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}


// I could replace all fo these function if i used [bind()]
// function add() {
//   calculateResult('ADD');
// }

// function subtract() {
//   calculateResult('SUBTRACT');
// }

// function divide() {
//   calculateResult('DIVIDE');
// }

// function multiply() {
//   calculateResult('MULTIPLY');
// }

addBtn.addEventListener('click', calculateResult.bind(this, ADD_OPERATOR));
subtractBtn.addEventListener('click', calculateResult.bind(this, SUBTRACT_OPERATOR));
divideBtn.addEventListener('click', calculateResult.bind(this, DIVIDE_OPERATOR));
multiplyBtn.addEventListener('click', calculateResult.bind(this, MULTIPLY_OPERATOR));

// alert(++currentResult);// returned the edited value
// alert(--currentResult);//returned the before the change
