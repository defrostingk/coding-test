const fs = require("fs");
const dwarves = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

function getCombination(oriArr, selection) {
  const result = [];
  if (selection === 1) return oriArr.map((v) => [v]);

  oriArr.forEach((fixed, idx, ori) => {
    const rest = ori.slice(idx + 1);
    const comb = getCombination(rest, selection - 1);
    const added = comb.map((parts) => [fixed, ...parts]);
    result.push(...added);
  });

  return result;
}

function findSevenDwarves(dwarves) {
  const NUM_OF_DWARVES = 7;
  let heightSum = 0;
  let sevenDwarves = [];

  sevenDwarves = getCombination(dwarves, NUM_OF_DWARVES);
  sevenDwarves.forEach((comb) => {
    heightSum = comb.reduce((acc, cur) => (acc += cur), 0);
    if (heightSum === 100) {
      sevenDwarves = comb;
      return;
    }
  });

  return sevenDwarves.sort((a, b) => a - b);
}

function printSevenDwarves(dwarves) {
  console.log(findSevenDwarves(dwarves).join("\n"));
}

printSevenDwarves(dwarves);
