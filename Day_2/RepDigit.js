// Link to the Question --> https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a number: ");
const arr = [];

const repDigit = (num) => {
  while (num > 0) {
    let digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }
  let result = arr.every((element) => {
    if (element === arr[0]) {
      return true;
    } else {
      return false;
    }
  });
  return result;
};

if (Number(num) < 0) {
  console.log("false");
} else if (Number(num) === 0) {
  console.log("true");
} else {
  console.log(repDigit(num));
}
