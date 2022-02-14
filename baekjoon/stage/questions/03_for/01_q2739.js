const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let n = +input;

for (let i = 0; i < 9; i++) {
  console.log(`${n} * ${i + 1} = ${n * (i + 1)}`);
}
