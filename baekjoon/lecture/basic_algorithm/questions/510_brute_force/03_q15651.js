const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const combination = [];
let result = "";

dfs(0);

console.log(result.trim());

function dfs(cnt) {
  if (cnt === m) {
    result += combination.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    combination.push(i);
    dfs(cnt + 1);
    combination.pop();
  }
}
