const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [node, edge, nodeStart] = input.shift().split(' ').map(Number);
const nodeConnection = input.map((connection) =>
  connection.split(' ').map(Number)
);

const adjacencyList = Array.from(Array(node + 1), () => new Array());
for (let i = 0; i < edge; i++) {
  adjacencyList[nodeConnection[i][0]].push(nodeConnection[i][1]);
  adjacencyList[nodeConnection[i][1]].push(nodeConnection[i][0]);
}
adjacencyList.map((connection) => connection.sort((a, b) => a - b));

printDfsAndBfs(adjacencyList, nodeStart);

function printDfsAndBfs(adjList, nodeStart) {
  const visited = new Array(node).fill(false);
  const orderDfs = [];
  const orderBfs = [];
  let nodeNext, nodeCurrent;

  visited.unshift();

  dfs(nodeStart);
  console.log(orderDfs.join(' '));

  visited.fill(false);
  bfs(nodeStart);
  console.log(orderBfs.join(' '));

  function dfs(start) {
    if (visited[start]) return;
    visited[start] = true;
    orderDfs.push(start);
    for (let i = 0; i < adjList[start].length; i++) {
      nodeNext = adjList[start][i];
      if (!visited[nodeNext]) {
        dfs(nodeNext);
      }
    }
  }

  function bfs(start) {
    const queue = [];
    queue.push(start);
    while (queue.length) {
      nodeCurrent = queue.shift();
      if (!visited[nodeCurrent]) {
        visited[nodeCurrent] = true;
        orderBfs.push(nodeCurrent);
        for (let i = 0; i < adjList[nodeCurrent].length; i++) {
          nodeNext = adjList[nodeCurrent][i];
          if (!visited[nodeNext]) {
            queue.push(nodeNext);
          }
        }
      }
    }
  }
}
