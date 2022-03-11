const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const n = +input;

printNumsOfDigits(n);

function printNumsOfDigits(naturalNum) {
  console.log(getNumsOfDigits(naturalNum));
}

function getNumsOfDigits(naturalNum) {
  const digits = naturalNum.toString().length;
  let result = 0;

  for (let i = 1; i < digits; i++) {
    result += 9 * i * 10 ** (i - 1);
  }
  result += (naturalNum - 10 ** (digits - 1) + 1) * digits;

  return result;
}
