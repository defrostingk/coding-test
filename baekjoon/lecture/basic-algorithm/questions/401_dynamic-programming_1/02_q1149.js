const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const sizeOfTestSuite = +input.shift();
const testSuite = input.map((v) => v.split(/\s/).map(Number));

const getCostMin = (house) => {
  const { length } = house;
  let cost = Array.from(Array(length), () => new Array(3));

  for (let i = 0; i < 3; i++) {
    cost[0][i] = house[0][i];
  }

  for (let i = 1; i < length; i++) {
    cost[i][0] = Math.min(cost[i - 1][1], cost[i - 1][2]) + house[i][0];
    cost[i][1] = Math.min(cost[i - 1][0], cost[i - 1][2]) + house[i][1];
    cost[i][2] = Math.min(cost[i - 1][0], cost[i - 1][1]) + house[i][2];
  }

  return Math.min(...cost[length - 1]);
};

const printCostMin = () => {
  console.log(getCostMin(testSuite));
};

printCostMin();
