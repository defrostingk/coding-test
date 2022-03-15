const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s+/);

const [a, b, c, d] = input;

console.log(+(a + b) + +(c + d));
