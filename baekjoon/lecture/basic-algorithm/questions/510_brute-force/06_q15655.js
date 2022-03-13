const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [n, m] = input.shift().split(/\s+/).map(Number);
const nums = input
  .shift()
  .split(/\s+/)
  .map(Number)
  .sort((a, b) => a - b);

const visited = new Array(n);
const part = [];
let result = "";

dfs(0, 0);

console.log(result.trim());

function dfs(cnt, idx) {
  if (cnt === m) {
    result += part.join(" ") + "\n";
    return;
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      part.push(nums[i]);
      dfs(cnt + 1, i);
      part.pop();
      visited[i] = false;
    }
  }
}
