const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const cardToBuy = +input.shift();
const cardNumInPackAndPrice = input.shift().split(/\s/).map(Number);

const getMinCost = (cardToBuy, pack) => {
  let minCost = [0, ...pack];
  for (let i = 2; i <= cardToBuy; i++) {
    for (let j = 1; j < i; j++) {
      minCost[i] = Math.min(minCost[i], minCost[i - j] + minCost[j]);
    }
  }
  return minCost[cardToBuy];
};

console.log(getMinCost(cardToBuy, cardNumInPackAndPrice));
