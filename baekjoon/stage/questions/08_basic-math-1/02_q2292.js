const fs = require("fs");
const input = +fs.readFileSync("../input.txt").toString().trim();

let n = 1;
let room = 1;

// 1: 1                         ~ 6*0 + 1
// 2: 2~7           6*0 + 2     ~ 6*1 + 1           +6
// 3: 8~19          6*1 + 2     ~ 6*3 + 1           +12
// 4: 20~37         6*3 + 2     ~ 6*6 + 1           +18
// 5: 38~61         6*6 + 2     ~ 6*10 + 1          +24
// 6: 62~91         6*10 + 2    ~ 6*15 + 1          +30

while (room < input) {
  room += 6 * n;
  n++;
}

console.log(n);
