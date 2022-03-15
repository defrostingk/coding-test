const fs = require('fs');
const n = +fs.readFileSync('../input.txt').toString().trim();

const visited = new Array(n);
const nums = Array.from(Array(n), (v, i) => (v = i + 1));
const part = [];
const result = [];

dfs(0);
console.log(result.join('\n'));

function dfs(depth) {
  if (depth === n) {
    result.push(part.join(' '));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      part.push(nums[i]);
      dfs(depth + 1);
      part.pop();
      visited[i] = false;
    }
  }
}
