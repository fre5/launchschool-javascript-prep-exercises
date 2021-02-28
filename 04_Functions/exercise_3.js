//multiply.js
function getNum(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

let fNum = getNum('Enter the first number: ');
let lNum = getNum('Enter the second number: ');

console.log(`${fNum} * ${lNum} = ${multiply(fNum, lNum)}`);