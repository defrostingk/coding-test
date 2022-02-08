const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const n = +input;

function getFibonacciSeq(num) {
  if (num <= 0) return 0;
  else if (num === 1) return 1;
  else return getFibonacciSeq(num - 1) + getFibonacciSeq(num - 2);
}

console.log(getFibonacciSeq(n));
