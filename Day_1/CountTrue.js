// Link to Question --> https://edabit.com/challenge/GLbuMfTtDWwDv2F73

const readlineSync = require("readline-sync");
const n = readlineSync.question("Enter the length of the array : ");
const array = [];
for (let i = 0; i < n; i++) {
  let value = readlineSync.question(
    "Enter True or False for element " + (i + 1) + ": "
  );
  array.push(value);
}
const countTrue = (array) => {
  let c = 0;
  if (array.length > 0) {
    for (i = 0; i < array.length; i++) {
      if (array[i].toLowerCase() === "true") {
        c++;
      }
    }
    return c;
  } else {
    return 0;
  }
};

console.log(countTrue(array));
