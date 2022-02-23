const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

const cntFactorFiveFrom = (num) => {
  let cnt = 0;
  while (num > 1) {
    cnt += Math.floor(num / 5);
    num /= 5;
  }
  return cnt;
};

console.log(cntFactorFiveFrom(n));
