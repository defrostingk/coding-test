const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

let remainders = [];
let cntRemainders = [];

input.forEach((num, index) => (remainders[index] = num % 42));
cntRemainders = remainders.filter((remainder, index) => {
  return remainders.indexOf(remainder) === index;
});
console.log(cntRemainders.length);
