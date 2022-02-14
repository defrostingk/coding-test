const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

const a = input[0];
const b = input[1];

let newA = +a.split("").reverse().join("");
let newB = +b.split("").reverse().join("");

let result = newA > newB ? newA : newB;
console.log(result);
