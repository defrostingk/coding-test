const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

const factorial = (num) => {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
};

console.log(factorial(n));
