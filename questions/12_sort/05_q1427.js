const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("")
  .map((x) => +x);

console.log(input.sort((a, b) => b - a).join(""));
