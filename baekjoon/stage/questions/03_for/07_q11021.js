const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const n = input[0];
let result = "";

for (i = 1; i < n + 1; i++) {
  result += `Case #${i}: ${input[i * 2 - 1] + input[i * 2]}\n`;
}

console.log(result);
