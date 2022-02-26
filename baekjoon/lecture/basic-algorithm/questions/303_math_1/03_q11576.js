const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [futureBaseRadix, nowBaseRadix] = input.shift().split(/\s/).map(Number);
const digitNum = +input.shift();
const digit = input.shift().split(/\s/).map(Number);

const futureBaseRadixToDecimal = (future, digit) => {
  let decimal = 0;
  let digitMultiplier = 0;

  for (let i = digit.length - 1; i >= 0; i--, digitMultiplier++) {
    decimal += digit[i] * Math.pow(future, digitMultiplier);
  }

  return decimal;
};

const decimalToNowBaseRadix = (now, decimal) => {
  if (!decimal) return "0";
  let dividend = decimal;
  let nowBaseRadix = [];

  while (dividend > 0) {
    nowBaseRadix.unshift(dividend % now);
    dividend = Math.floor(dividend / now);
  }

  return nowBaseRadix.join(" ");
};

const futureToNowBaseRadix = (future, now, digit) => {
  const decimal = futureBaseRadixToDecimal(future, digit);

  return decimalToNowBaseRadix(now, decimal);
};

console.log(futureToNowBaseRadix(futureBaseRadix, nowBaseRadix, digit));
