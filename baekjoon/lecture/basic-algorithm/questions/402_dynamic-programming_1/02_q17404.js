const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const numOfHouses = +input.shift();
const houses = input.map((v) => v.split(/\s/).map(Number));

function getMinCost(houses) {
  const { length } = houses;
  const MAX_VALUE = 1000001;
  let cost = Array.from(Array(length), () => new Array(3));
  let minCost = MAX_VALUE;

  for (let rgb = 0; rgb < 3; rgb++) {
    for (let i = 0; i < 3; i++) {
      cost[1][i] = houses[0][rgb] + houses[1][i];
    }
    cost[1][rgb] = MAX_VALUE;

    for (let i = 2; i < length; i++) {
      cost[i][0] = Math.min(cost[i - 1][1], cost[i - 1][2]) + houses[i][0];
      cost[i][1] = Math.min(cost[i - 1][2], cost[i - 1][0]) + houses[i][1];
      cost[i][2] = Math.min(cost[i - 1][0], cost[i - 1][1]) + houses[i][2];
    }
    cost[length - 1][rgb] = MAX_VALUE;

    minCost = Math.min(minCost, ...cost[length - 1]);
  }

  return minCost;
}

function printMinCost(houses) {
  console.log(getMinCost(houses));
}

printMinCost(houses);
