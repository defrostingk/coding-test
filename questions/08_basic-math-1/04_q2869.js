const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const up = input[0];
const down = input[1];
const height = input[2];
const days = up < height ? Math.ceil((height - up) / (up - down)) + 1 : 1;

console.log(days);
