const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const testCases = input.slice(0, -1);

const isPrimeNum = (num) => {
  if (num < 2) return false;
  const divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return false;
  return true;
};

let result = "";
let cnt = 0;

testCases.forEach((testCase) => {
  for (let i = testCase + 1; i <= 2 * testCase; i++) {
    if (isPrimeNum(i)) cnt++;
  }
  result += cnt + "\n";
  cnt = 0;
});

console.log(result.trim());
