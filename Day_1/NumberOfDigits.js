// Link to Question --> https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a number: ");

const noOfDigits = (num) => {
  let d = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    d++;
  }
  return d;
};

const numValidation = (num) => {
  let numberOfDigits = 0;
  if (Number(num) < 0) {
    numberOfDigits = noOfDigits(num * -1);
  } else if (Number(num) === 0) {
    numberOfDigits = 1;
  } else {
    numberOfDigits = noOfDigits(num);
  }
  return numberOfDigits;
};

console.log(numValidation(num));
