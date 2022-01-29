const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let a = true;
let b = true;
let cnt = 0;
let result = "";

while (true) {
  [a, b] = input[cnt++].split(/\s/).map((x) => +x);
  if (!(a || b)) break;
  result += `${a + b}\n`;
}

console.log(result.trim());
