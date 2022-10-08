// Link to the Question : https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

const readlineSync = require("readline-sync");
const petName = readlineSync.question("Enter Pet Name: ");
const petValue = readlineSync.question("Enter Pet Value: ");
let obj = {};
const no = readlineSync.question("Enter the number of stolen items: ");
if (no > 0) {
  for (let i = 0; i < no; i++) {
    let item = readlineSync.question(
      "Enter the name of " + (i + 1) + "th stolen item: "
    );
    let itemValue = readlineSync.question(
      "Enter the value of " + (i + 1) + "th stolen item: "
    );
    obj[item] = itemValue;
  }
} else {
  obj = {};
}
const addName = (obj, petName, petValue) => {
  let resultantObj = {};
  if (Object.keys(obj).length > 0) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      resultantObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
    resultantObj[petName] = petValue;
  } else {
    resultantObj[petName] = petValue;
  }
  return resultantObj;
};

console.log(addName(obj, petName, petValue));
