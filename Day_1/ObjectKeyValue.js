//Link to the Question --> https://edabit.com/challenge/AP4hnF97anRc2mAZ6

const readlineSync = require("readline-sync");
const n = readlineSync.question("Enter the number of Keys: ");

const obj = {};
for (let i = 0; i < n; i++) {
  let name = readlineSync.question("Enter the " + (i + 1) + "th Key: ");
  let value = readlineSync.question("Enter the " + (i + 1) + "th value: ");
  obj[name] = value;
}

const keyAndValues = (obj) => {
  const resultantArray = [];
  keys = Object.keys(obj).sort();
  values = Object.values(obj);
  resultantArray.push(keys);
  resultantArray.push(values);
  return resultantArray;
};

console.log(keyAndValues(obj));
