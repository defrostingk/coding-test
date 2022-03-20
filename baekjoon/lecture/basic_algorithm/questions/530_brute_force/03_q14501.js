const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const schedule = input.map((day) => day.split(' ').map(Number));

printMaxEarnings(n, schedule);

function printMaxEarnings(n, schedule) {
  console.log(getMaxEarnings(n, schedule));
}

function getMaxEarnings(n, schedule) {
  return Math.max(...getEarnings(n, schedule));
}

function getEarnings(n, schedule) {
  const part = [];
  const earnings = [];
  let earning;

  dfs(0);

  return earnings;

  function dfs(idx) {
    if (idx > n) {
      part.pop();
      earning = part.reduce((acc, cur) => (acc += cur), 0);
      earnings.push(earning);
      part.push(0);
      return;
    } else if (idx === n) {
      earning = part.reduce((acc, cur) => (acc += cur), 0);
      earnings.push(earning);
      return;
    }
    for (let i = idx; i < n; i++) {
      part.push(schedule[i][1]);
      dfs(i + schedule[i][0]);
      part.pop();
    }
  }
}
