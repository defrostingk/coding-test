const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const part = [];
let result = "";

dfs(0, 1);
console.log(result.trim());

function dfs(cnt, idx) {
  if (cnt === m) {
    result += part.join(" ") + "\n";
    return;
  }

  for (let i = idx; i <= n; i++) {
    part.push(i);
    dfs(cnt + 1, i);
    part.pop();
  }
}
