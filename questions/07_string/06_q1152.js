const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let cnt = 0;

for (let i = 0; i < input.length; i++) cnt += input[i] === " " ? 1 : 0;
cnt += input.length ? 1 : 0;
console.log(cnt);
