const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let n = +input;
let result = "";

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < i + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
