const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const multi = String(input[0] * input[1] * input[2]);
let cntNum = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
let result = "";

for (let i = 0; i < multi.length; i++) {
  for (j = 0; j < 10; j++) {
    if (multi[i] === String(j)) cntNum[j]++;
  }
}

for (let i = 0; i < 10; i++) result += `${cntNum[i]}\n`;

console.log(result.trim());
