const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const a = +input[0];
const b = +input[1];

console.log(a * (b % 10));
console.log(a * parseInt((b % 100) / 10));
console.log(a * parseInt(b / 100));
console.log(a * b);
