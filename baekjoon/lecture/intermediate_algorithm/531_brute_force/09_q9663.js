const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim();

(function solution(input) {
  const n = +input;
  const rows = new Array(n);
  let cnt = 0;

  dfs(0);

  console.log(cnt);

  function dfs(idx) {
    if (idx >= n) {
      cnt++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!rows[idx]) {
        rows[idx] = i;
        if (isAvailable(idx)) dfs(idx + 1);
        rows[idx] = 0;
      }
    }
  }

  function isAvailable(x) {
    for (let i = 0; i < x; i++) {
      if (rows[x] === rows[i]) return false;
      if (Math.abs(rows[x] - rows[i]) === x - i) return false;
    }
    return true;
  }
})(input);
