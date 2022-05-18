const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const [sequence, ops] = input
    .slice(1)
    .map((val) => val.split(' ').map(Number));

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  dfs(1, sequence[0]);

  console.log(`${max}\n${min}`);

  function dfs(idx, src) {
    if (idx >= n) {
      max = Math.max(max, src);
      min = Math.min(min, src);
      return;
    }
    for (let i = 0; i < ops.length; i++) {
      if (ops[i]) {
        ops[i]--;
        dfs(idx + 1, operator(i, src, sequence[idx]));
        ops[i]++;
      }
    }
  }

  function operator(op, src, num) {
    if (op === 0) {
      return src + num;
    } else if (op === 1) {
      return src - num;
    } else if (op === 2) {
      return src * num;
    } else if (op === 3) {
      return src < 0 ? -Math.floor(-src / num) : Math.floor(src / num);
    }
  }
})(input);
