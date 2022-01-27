const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let n = +input;
let result = "";

for (let i = n; i > 0; i--) {
  result += `${i}\n`;
}
console.log(result);
