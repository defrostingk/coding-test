const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input.shift();
const sequence = input;

console.log(n, sequence);
