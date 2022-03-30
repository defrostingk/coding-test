const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [node, edge] = input.shift().split(' ').map(Number);

const adjacencyList = Array.from(Array(node + 1), () => new Array());
input.forEach((connection) => {
  const [start, end] = connection.split(' ').map(Number);
  adjacencyList[start].push(end);
  adjacencyList[end].push(start);
});

console.log(cntConnectedComponent(adjacencyList));

function cntConnectedComponent(adjList) {
  const visited = new Array(node + 1);
  let cnt = 0;

  for (let i = 1; i <= node; i++) {
    cnt += dfs(i);
  }

  return cnt;

  function dfs(start) {
    if (visited[start]) return 0;
    visited[start] = true;
    for (let i = 0; i < adjList[start].length; i++) {
      let nodeNext = adjList[start][i];
      if (!visited[nodeNext]) {
        dfs(nodeNext);
      }
    }
    return 1;
  }
}
