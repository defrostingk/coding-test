const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");
const a = +input[0];
const b = +input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
