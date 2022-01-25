const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().trim();

console.log(+input - 543);
