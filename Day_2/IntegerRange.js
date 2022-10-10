// Link to the Question --> https://edabit.com/challenge/YT2kXSMEtACPPk35R

const readlineSync = require("readline-sync");
const lb = readlineSync.question("Enter the lower bound: ");
const num = readlineSync.question("Enter the Number: ");
const ub = readlineSync.question("Enter the upper bound: ");

const integerInRange = (lb, num, ub) => {
  if (Number(num) >= Number(lb) && Number(num) < Number(ub)) {
    return true;
  }
  return false;
};

if (isNaN(lb) === true || isNaN(num) === true || isNaN(ub) === true) {
  console.log("Please enter Integers !!");
} else {
  console.log(integerInRange(lb, num, ub));
}
