const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s/);

const n = input.shift();
const b = +input.shift();

const zeroToZTodecimal = (zeroToZ) => {
  const ascii = zeroToZ.charCodeAt();
  if (ascii < 58) return ascii - 48;
  return ascii - 55;
};

const nBaseRadixToDecimal = (nBaseRadix, baseRadixNum) => {
  let decimal = 0;
  let digit = 0;
  for (let i = nBaseRadix.length - 1; i >= 0; i--, digit++) {
    decimal += zeroToZTodecimal(nBaseRadix[i]) * Math.pow(baseRadixNum, digit);
  }
  return decimal;
};

console.log(nBaseRadixToDecimal(n, b));
