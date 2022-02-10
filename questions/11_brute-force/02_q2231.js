const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

const disassembleSum = (constructor) => {
  const length = String(constructor).length;
  let sum = constructor;
  for (let i = 0; i < length; i++) {
    sum += +String(constructor)[i];
  }
  return sum;
};

const minConstructor = (num) => {
  let constructor = num - 9 * String(num).length;
  while (constructor < num) {
    if (disassembleSum(constructor) === num) return constructor;
    constructor++;
  }
  return 0;
};

console.log(minConstructor(n));
