const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input[0];
let integer = input[1].split(" ").map((x) => +x);
let max = -1000001;
let min = 1000001;

for (let i = 0; i < n; i++) {
  if (max < integer[i]) max = integer[i];
  if (min > integer[i]) min = integer[i];
}

console.log(min, max);
