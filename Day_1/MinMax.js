// Link to the Question --> https://edabit.com/challenge/Q3n42rEWanZSTmsJm

const readlineSync = require("readline-sync");
const n = readlineSync.question("Enter the length of the array: ");
const array = [];
for (let i = 0; i < n; i++) {
  let value = readlineSync.question(
    "Enter element " + (i + 1) + " of the array : "
  );
  array.push(value);
}
let min = array[0];
let max = array[0];

const minMax = (array) => {
  const newArray = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }
    newArray.push(min);
    newArray.push(max);
    return newArray;
  } else {
    console.log("Please enter minimum one element !!");
    return 0;
  }
};

const answer = minMax(array);
if (answer != 0) {
  console.log(answer);
}
