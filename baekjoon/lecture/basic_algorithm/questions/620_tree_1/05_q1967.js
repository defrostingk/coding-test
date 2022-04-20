const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const nodes = +input[0];
const edges = input.slice(1).map((edge) => edge.split(' ').map(Number));

console.log(getDiameterOfTree(nodes, edges));

function getDiameterOfTree(nodes, edges) {
  const adjList = getAdjacencyList();
  const visited = new Array(nodes + 1);
  let start = 1;
  let lengthMax = 0;

  dfs(start, 0);
  visited.fill(0);
  dfs(start, 0);

  return lengthMax;

  function dfs(node, length) {
    visited[node] = 1;
    for (let [next, weight] of adjList[node]) {
      if (!visited[next]) {
        const lengthNext = length + weight;
        if (lengthNext > lengthMax) {
          lengthMax = lengthNext;
          start = next;
        }
        dfs(next, lengthNext);
      }
    }
  }

  function getAdjacencyList() {
    const adjList = Array.from(Array(nodes + 1), () => new Array());
    edges.forEach((edge) => {
      const [from, to, weight] = edge;
      adjList[from].push([to, weight]);
      adjList[to].push([from, weight]);
    });
    return adjList;
  }
}
