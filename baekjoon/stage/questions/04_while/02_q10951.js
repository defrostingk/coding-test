const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let a, b;
let i = 0;
let result = "";

while (true) {
  try {
    [a, b] = input[i].split(" ").map((x) => +x);
    result += `${a + b}\n`;
    i++;
  } catch {
    break;
  }
}

console.log(result.trim());
