// Link to the Question --> https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number: ");
const length = readlineSync.question("Enter the length: ");

const arrayOfMultiples = (num, length) => {
  const resultantArray = [];
  for (let i = 1; i <= length; i++) {
    resultantArray.push(num * i);
  }
  return resultantArray;
};
console.log(arrayOfMultiples(num, length));
