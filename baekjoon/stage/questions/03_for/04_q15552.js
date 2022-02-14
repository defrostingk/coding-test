const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

let n = input[0];
let result = "";

for (let i = 0; i < n; i++) {
  result += `${input[i * 2 + 1] + input[i * 2 + 2]}\n`;
}

console.log(result);
