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
let result = [];

dfs(0);
console.log(result.join("\n"));

function dfs(cnt) {
  if (cnt === m) {
    result.push(part.join(" "));
    return;
  } else {
    let prev;
    for (let i = 0; i < n; i++) {
      if (!visited[i] && prev !== nums[i]) {
        visited[i] = true;
        prev = nums[i];
        part.push(nums[i]);
        dfs(cnt + 1);
        part.pop();
        visited[i] = false;
      }
    }
  }
}
