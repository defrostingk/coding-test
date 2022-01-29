const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let n = input;
let preN, newN;
let cnt = 0;

if (+n < 10) n = "0" + n;

preN = n;

while (n != newN) {
  newN = preN[1] + `${(+preN[0] + +preN[1]) % 10}`;
  preN = newN;
  cnt++;
}

console.log(cnt);
