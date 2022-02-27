const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const cardToBuy = +input.shift();
const cardNumInPackAndPrice = input.shift().split(/\s/).map(Number);

const getMaxCost = (cardToBuy, pack) => {
  let maxCost = [0, ...pack];
  for (let i = 2; i <= cardToBuy; i++) {
    for (let j = 1; j < i; j++) {
      maxCost[i] = Math.max(maxCost[i], maxCost[i - j] + maxCost[j]);
    }
  }
  return maxCost[cardToBuy];
};

console.log(getMaxCost(cardToBuy, cardNumInPackAndPrice));
