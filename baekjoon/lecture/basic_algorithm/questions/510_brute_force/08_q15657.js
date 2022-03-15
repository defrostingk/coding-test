const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [n, m] = input.shift().split(/\s+/).map(Number);
const nums = input
  .shift()
  .split(/\s+/)
  .map(Number)
  .sort((a, b) => a - b);

const part = [];
let result = "";

dfs(0, 0);

console.log(result.trim());

function dfs(cnt, idx) {
  if (cnt === m) {
    result += part.join(" ") + "\n";
    return;
  } else {
    for (let i = idx; i < n; i++) {
      part.push(nums[i]);
      dfs(cnt + 1, i);
      part.pop();
    }
  }
}
