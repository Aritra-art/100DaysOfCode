// Link to the Question --> https://edabit.com/challenge/erFxBbqzZPSegMwnc

const readlineSync = require("readline-sync");
const amt = readlineSync.question("Enter total amount: ");
const quarters = readlineSync.question("Enter total quarters: ");
const dimes = readlineSync.question("Enter total dimes: ");
const nickles = readlineSync.question("Enter total nickles: ");
const pennies = readlineSync.question("Enter total pennies: ");

const array = [quarters, dimes, nickles, pennies];

const changeEnough = (array, amt) => {
  if (
    Number(array[0] * 0.25) +
      Number(array[1] * 0.1) +
      Number(array[2] * 0.05) +
      Number(array[3] * 0.01) >
    Number(amt)
  ) {
    return true;
  }
  return false;
};
console.log(changeEnough(array, amt));
