const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const nodes = +input[0];
const edges = input.slice(1);

console.log(getMaxLength(nodes, edges));

function getMaxLength(nodes, edges) {
  const adjList = getAdjacencyList(nodes, edges);
  const visited = new Array(nodes + 1);
  let maxLength = 0;
  let maxNode = 0;

  dfs(1, 0);

  visited.fill(0);
  dfs(maxNode, 0);

  return maxLength;

  function dfs(node, sum) {
    visited[node] = 1;
    for (let [nodeNext, weight] of adjList[node]) {
      if (!visited[nodeNext]) {
        const sumNext = sum + weight;
        if (sumNext > maxLength) {
          maxLength = sumNext;
          maxNode = nodeNext;
        }
        dfs(nodeNext, sumNext);
      }
    }
  }
}

function getAdjacencyList(nodes, edges) {
  const adjacencyList = Array.from(Array(nodes + 1), () => new Array());
  edges.forEach((edge) => {
    const dstAndWeight = edge.split(' ').map(Number);
    const from = dstAndWeight[0];
    let idx = 1;
    while (dstAndWeight[idx] !== -1) {
      const to = dstAndWeight[idx++];
      const weight = dstAndWeight[idx++];
      adjacencyList[from].push([to, weight]);
    }
  });
  return adjacencyList;
}
