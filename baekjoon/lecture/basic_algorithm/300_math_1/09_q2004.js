const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const cntFactorTwoFrom = (n) => {
  let cnt = 0;
  while (n > 1) {
    cnt += Math.floor(n / 2);
    n /= 2;
  }
  return cnt;
};
const cntFactorFiveFrom = (n) => {
  let cnt = 0;
  while (n > 1) {
    cnt += Math.floor(n / 5);
    n /= 5;
  }
  return cnt;
};

const cntFactorTwoFromCombination = (n, r) => {
  return cntFactorTwoFrom(n) - cntFactorTwoFrom(r) - cntFactorTwoFrom(n - r);
};

const cntFactorFiveFromCombination = (n, r) => {
  return cntFactorFiveFrom(n) - cntFactorFiveFrom(r) - cntFactorFiveFrom(n - r);
};

const cntEndZeroFromCombination = (n, m) => {
  const cntFive = cntFactorFiveFromCombination(n, m);
  const cntTwo = cntFactorTwoFromCombination(n, m);
  return Math.min(cntFive, cntTwo);
};

console.log(cntEndZeroFromCombination(n, m));
