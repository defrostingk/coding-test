const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");
let output = +input[0] / +input[1];

console.log(output);
