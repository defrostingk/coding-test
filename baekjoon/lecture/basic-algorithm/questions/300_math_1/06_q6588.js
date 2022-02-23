const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(0, -1);

const isPrime = (num) => {
  if (num < 2) return 0;
  const divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return 0;
  return 1;
};
const getGoldBachForm = (sum) => {
  let a = 2,
    b;

  for (let i = 3; i <= sum / 2; i++) {
    a = i;
    b = sum - a;
    if (isPrime(a) && isPrime(b)) {
      const form = `${sum} = ${a} + ${b}`;
      return form;
    }
  }
  return "Goldbach's conjecture is wrong.";
};
const getGoldBachConjecture = (testCases) => {
  const lines = [];
  testCases.forEach((testCase) => lines.push(getGoldBachForm(testCase)));
  return lines;
};

console.log(getGoldBachConjecture(input).join("\n"));
