const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(/\s+/).map(Number));

const [n, m] = input.shift();
const nums = input.shift().sort((a, b) => a - b);

const part = [];
const result = [];

dfs(0);

console.log(result.join("\n"));

function dfs(depth) {
  if (depth === m) {
    result.push(part.join(" "));
    return;
  }
  let prev;
  for (let i = 0; i < n; i++) {
    if (prev !== nums[i]) {
      prev = nums[i];
      part.push(nums[i]);
      dfs(depth + 1);
      part.pop();
    }
  }
}
