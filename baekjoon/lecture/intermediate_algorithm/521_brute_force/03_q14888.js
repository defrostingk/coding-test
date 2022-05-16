const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const [numbers, ops] = input
    .slice(1)
    .map((value) => value.split(' ').map(Number));

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  dfs(numbers[0], 1, 0);

  max = max ? max : 0;
  min = min ? min : 0;

  console.log(`${max}\n${min}`);

  function dfs(src, index) {
    if (index >= n) {
      max = Math.max(max, src);
      min = Math.min(min, src);
      return;
    }

    for (let i = 0; i < ops.length; i++) {
      if (ops[i] > 0) {
        ops[i]--;
        dfs(calculate(i, src, numbers[index]), index + 1);
        ops[i]++;
      }
    }
  }

  function calculate(opIdx, num1, num2) {
    if (opIdx === 0) {
      return num1 + num2;
    } else if (opIdx === 1) {
      return num1 - num2;
    } else if (opIdx === 2) {
      return num1 * num2;
    } else if (opIdx === 3) {
      if (num1 < 0) return -Math.floor(-num1 / num2);
      else return Math.floor(num1 / num2);
    }
  }
})(input);
