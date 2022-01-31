const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const num = input[1]
  .trim()
  .split("")
  .map((x) => +x);

console.log(num.reduce((acc, cur) => (acc += cur), 0));
