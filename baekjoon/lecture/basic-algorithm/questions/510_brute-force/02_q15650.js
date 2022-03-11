const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

printCombinationOneToN(n, m);

function printCombinationOneToN(n, r) {
  const combination = getCombinationOneToN(n, r).map((combination) =>
    combination.join(" ")
  );
  console.log(combination.join("\n"));
}
function getCombinationOneToN(n, r) {
  const num = new Array(n).fill().map((v, i) => (v = i + 1));
  return getCombination(num, r);
}
function getCombination(numArr, r) {
  let result = [];
  if (r === 1) {
    return numArr.map((v) => [v]);
  }

  numArr.forEach((fixed, idx, ori) => {
    const rest = ori.slice(idx + 1);
    const restOfCombination = getCombination(rest, r - 1);
    const part = restOfCombination.map((comb) => [fixed, ...comb]);
    result.push(...part);
  });

  return result;
}
