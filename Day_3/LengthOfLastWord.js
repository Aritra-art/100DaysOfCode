// Link to the Question : https://leetcode.com/problems/length-of-last-word/

const readlineSync = require("readline-sync");
const s = readlineSync.question("Enter a string: ");

const lengthOfLastWord = (s) => {
  let ans = 0;
  const newString = s.trim();
  for (let i = newString.length - 1; i >= 0; i--) {
    if (newString.charAt(i) != " ") {
      ans++;
    } else {
      break;
    }
  }
  return ans;
};

console.log(lengthOfLastWord(s));
