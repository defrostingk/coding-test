const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const integers = input.shift().split(/\s+/).map(Number);

console.log(getMaxSumOfDiff(getCasesOfNumbers(integers)));

function getCasesOfNumbers(integers) {
  const { length } = integers;
  const visited = new Array(length);
  const part = [];
  const result = [];

  dfs(0);

  function dfs(depth) {
    if (depth === length) {
      result.push([...part]);
      return;
    }
    for (let i = 0; i < length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        part.push(integers[i]);
        dfs(depth + 1);
        part.pop();
        visited[i] = false;
      }
    }
  }

  return result;
}

function getMaxSumOfDiff(casesOfNumbers) {
  let max = 0;
  casesOfNumbers.forEach((nums) => {
    max = Math.max(max, getSumOfDiff(nums));
  });
  return max;
}

function getSumOfDiff(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    sum += Math.abs(nums[i] - nums[i + 1]);
  }
  return sum;
}
