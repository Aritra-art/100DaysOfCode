// Link to the Question --> https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

const readlineSync = require("readline-sync");
const n = readlineSync.question("Enter the number of keys: ");
const obj = {};
for (let i = 0; i < n; i++) {
  let keyName = readlineSync.question(
    "Enter the Key for " + (i + 1) + "th item: "
  );
  let valueName = readlineSync.question(
    "Enter the Value for " + (i + 1) + "th item: "
  );
  obj[keyName] = valueName;
}

const objectToArray = (obj) => {
  let resultantArray = [];
  if (Object.keys(obj).length > 0) {
    let arr = [];
    for (let i = 0; i < Object.keys(obj).length; i++) {
      arr.push(Object.keys(obj)[i]);
      arr.push(Object.values(obj)[i]);
      resultantArray.push(arr);
      arr = [];
    }
    return resultantArray;
  } else {
    resultantArray = [];
    return resultantArray;
  }
};

console.log(objectToArray(obj));
