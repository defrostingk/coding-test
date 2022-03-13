const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(/\s+/).map(Number));

const [n, m] = input.shift();
const nums = input.shift().sort((a, b) => a - b);

const vistied = new Array(n);
const part = [];
let result = [];

dfs(0, 0);
console.log(result.join("\n"));

function dfs(depth, idx) {
  if (depth === m) {
    result.push(part.join(" "));
    return;
  }
  let prev;
  for (let i = idx; i < n; i++) {
    if (!vistied[i] && prev !== nums[i]) {
      vistied[i] = true;
      prev = nums[i];
      part.push(nums[i]);
      dfs(depth + 1, i);
      part.pop();
      vistied[i] = false;
    }
  }
}
