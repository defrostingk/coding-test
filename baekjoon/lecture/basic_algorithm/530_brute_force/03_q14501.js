const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const schedule = input.map((day) => day.split(' ').map(Number));

printMaxEarnings(n, schedule);

function printMaxEarnings(n, schedule) {
  console.log(getMaxEarnings(n, schedule));
}

function getMaxEarnings(n, schedule) {
  let earnings = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const [duration, earning] = schedule[i];
    if (i + duration <= n) {
      earnings[i] += earning;
      for (j = i + duration; j < n; j++) {
        earnings[j] = Math.max(earnings[j], earnings[i]);
      }
    }
  }

  return Math.max(...earnings);
}
