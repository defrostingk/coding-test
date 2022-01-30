const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

let max = 0;
let index = 0;

for (let i = 0; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    index = i + 1;
  }
}

console.log(`${max}\n${index}`);
