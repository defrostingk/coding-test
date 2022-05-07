const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const visited = new Array(n);
const combination = [];
let result = "";

dfs(0, 0);

console.log(result.trim());

function dfs(cnt, idx) {
  if (cnt === m) {
    result += `${combination.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      combination.push(i + 1);
      dfs(cnt + 1, i);
      combination.pop();
      visited[i] = false;
    }
  }
}
