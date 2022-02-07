const fs = require("fs");
const radius = +fs.readFileSync("../input.txt").toString().trim();

console.log(radius);

let result = "";
