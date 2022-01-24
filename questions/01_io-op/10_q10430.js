const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

const a = +input[0];
const b = +input[1];
const c = +input[2];

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
