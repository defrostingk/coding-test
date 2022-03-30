const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [node, edge] = input.shift().split(' ').map(Number);

const adjacencyMatrix = Array.from(Array(node + 1), () =>
  new Array(node + 1).fill(0)
);
input.forEach((connection) => {
  const [start, end] = connection.split(' ').map(Number);
  adjacencyMatrix[start][end] = 1;
  adjacencyMatrix[end][start] = 1;
});

console.log(cntConnectedComponent(adjacencyMatrix));

function cntConnectedComponent(adjMatrix) {
  const visited = new Array(node + 1);
  let cnt = 0;

  for (let i = 1; i <= node; i++) {
    cnt += dfs(i);
  }

  return cnt;

  function dfs(start) {
    if (visited[start]) return 0;
    visited[start] = true;
    for (let i = 1; i <= node; i++) {
      if (!visited[i] && adjMatrix[start][i]) {
        dfs(i);
      }
    }
    return 1;
  }
}
