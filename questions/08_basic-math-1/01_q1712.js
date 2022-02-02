const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const fixedCost = input[0];
const variableCost = input[1];
const price = input[2];

let margin = price - variableCost;
let breakEven = margin > 0 ? Math.floor(fixedCost / margin + 1) : -1;

console.log(breakEven);
