const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let n = +input;
let sum = 0;

for (i = 0; i < n; i++) {
  sum += i + 1;
}

console.log(sum);
