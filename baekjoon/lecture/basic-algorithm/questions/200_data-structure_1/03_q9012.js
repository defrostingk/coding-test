const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();

const testCases = input;

const isVPS = (ps) => {
  let stack = [];

  for (let i = 0; i < ps.length; i++) {
    if (ps[i] === "(") stack.push(1);
    else {
      if (stack.length) stack.pop();
      else return "NO";
    }
  }
  return stack.length ? "NO" : "YES";
};

const solution = (testCases) => {
  let result = "";

  testCases.forEach((testCase) => (result += isVPS(testCase) + "\n"));

  console.log(result.trim());

  return;
};

solution(testCases);
