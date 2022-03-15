const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const decimalToMinusBinary = (decimal) => {
  let dividend = +decimal;
  let quotient, remainder;
  const divisor = -2;
  let MinusBinary = [];
  if (dividend === 0) return "0";
  if (dividend === 1) return "1";

  while (quotient !== 1) {
    remainder = dividend % divisor;
    if (dividend < 0) {
      remainder *= -1;
    }
    MinusBinary.unshift(remainder);
    quotient = Math.ceil(dividend / divisor);
    dividend = quotient;
  }
  MinusBinary.unshift(quotient);

  return MinusBinary.join("");
};

console.log(decimalToMinusBinary(input));
