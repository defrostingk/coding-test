const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

console.log(isCorrectOrder(input));

function isCorrectOrder(input) {
  const nodes = +input[0];
  const edges = input.slice(1, -1).map((edge) => edge.split(' ').map(Number));
  const [answer] = input.slice(-1).map((str) => str.split(' ').map(Number));

  if (answer[0] !== 1) return 0;

  const adjList = getAdjacencyList(nodes, edges);
  const order = new Array(nodes + 1);
  for (let i = 0; i < nodes; i++) {
    order[answer[i]] = i + 1;
  }
  adjList.map((node) => node.sort((a, b) => order[a] - order[b]));

  const visited = new Array(nodes + 1);
  let result = 1;
  let idx = 0;

  dfs(1);

  return result;

  function dfs(current) {
    if (!result) return;
    if (visited[current]) return;
    if (answer[idx++] !== current) {
      result = 0;
      return;
    }
    visited[current] = 1;
    for (let next of adjList[current]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  }
}

function getAdjacencyList(nodes, edges) {
  const adjList = Array.from(Array(nodes + 1), () => new Array());
  edges.forEach(([from, to]) => {
    adjList[from].push(to);
    adjList[to].push(from);
  });
  return adjList;
}
