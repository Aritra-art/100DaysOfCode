// Link to Question --> https://edabit.com/challenge/WEvqZTFcHeYzFn74c

const readlineSync = require("readline-sync");
let letter = readlineSync.question("Enter S for Square or C for Circle: ");
let value =
  letter.toLowerCase() === "s"
    ? readlineSync.question("Enter side: ")
    : readlineSync.question("Enter radius: ");

const perimeterCatch = (letter, value) => {
  let perimeter = 0;
  letter.toLowerCase() === "s"
    ? (perimeter = 4 * value)
    : (perimeter = (6.78 * value).toFixed(2));
  return perimeter;
};

console.log(perimeterCatch(letter, value));
