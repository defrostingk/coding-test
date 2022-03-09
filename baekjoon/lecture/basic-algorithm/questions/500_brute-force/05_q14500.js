const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [height, width] = input.shift().split(/\s/).map(Number);
const board = input;

console.log(height, width);
console.log(board);
