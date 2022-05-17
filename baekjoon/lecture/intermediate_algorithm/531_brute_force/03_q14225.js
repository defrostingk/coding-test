const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const sequence = input[1].split(' ').map(Number);

  const check = new Array(2000001);

  dfs(0, 0);

  for (let i = 1; i <= 2000000; i++) {
    if (!check[i]) {
      console.log(i);
      break;
    }
  }

  function dfs(sum, idx) {
    if (idx >= n) {
      check[sum] = 1;
      return;
    }
    dfs(sum + sequence[idx], idx + 1);
    dfs(sum, idx + 1);
  }
})(input);
