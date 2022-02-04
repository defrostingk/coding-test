const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s+/);

const sumBigNumber = (a, b) => {
  return String(BigInt(a) + BigInt(b));
};

console.log(sumBigNumber(input.shift(), input.shift()));
