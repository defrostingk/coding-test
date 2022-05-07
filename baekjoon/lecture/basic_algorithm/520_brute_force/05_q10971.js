const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const city = input.shift();
const weight = input.map((v) => v.split(/\s+/).map(Number));

console.log(getMinCost(weight));

function getMinCost(weight) {
  const { length } = weight;
  const visited = new Array(length);
  let minCost = 10000000;

  backtracking(0, 0, 0, 0);

  return minCost;

  function backtracking(depth, start, current, cost) {
    let currentWeight = weight[current][start];

    if (depth === length - 1 && currentWeight) {
      minCost = Math.min(minCost, cost + currentWeight);
      return;
    }

    for (let i = 1; i < length; i++) {
      currentWeight = weight[current][i];
      if (!visited[i] && currentWeight) {
        if (cost + currentWeight < minCost) {
          visited[i] = true;
          backtracking(depth + 1, start, i, cost + currentWeight);
          visited[i] = false;
        }
      }
    }
    return minCost;
  }
}
