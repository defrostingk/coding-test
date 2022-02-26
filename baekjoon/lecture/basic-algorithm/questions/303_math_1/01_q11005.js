const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s/);

const [n, b] = input.map(Number);

const decimalToZeroToZ = (decimal) => {
  if (decimal < 10) return String(decimal);
  return String.fromCharCode(decimal + 55);
};

const decimalToNBaseRadix = (decimal, baseRadixNum) => {
  if (!decimal) return "0";
  let baseRadix = "";
  let dividend = decimal;
  while (dividend > 0) {
    baseRadix = decimalToZeroToZ(dividend % baseRadixNum) + baseRadix;
    dividend = Math.floor(dividend / baseRadixNum);
  }
  return baseRadix;
};

console.log(decimalToNBaseRadix(n, b));
