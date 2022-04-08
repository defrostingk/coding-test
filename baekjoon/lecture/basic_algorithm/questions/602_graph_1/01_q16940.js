const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

console.log(isCorrectOrderForBfs(input));

function isCorrectOrderForBfs(input) {
  const nodes = +input[0];
  const edges = input.slice(1, -1).map((edge) => edge.split(' ').map(Number));
  const [answer] = input.slice(-1).map((str) => str.split(' ').map(Number));

  if (answer[0] !== 1) return 0;

  const adjacencyList = getAdjacencyList(nodes, edges);
  const order = new Array(nodes + 1);

  for (let i = 0; i < nodes; i++) {
    order[answer[i]] = i + 1;
  }

  for (let i = 1; i <= nodes; i++) {
    adjacencyList[i].sort((a, b) => order[a] - order[b]);
  }

  const correct = bfs(1);

  return +cmpArray(correct, answer);

  function bfs(start) {
    const visited = new Array(nodes + 1);
    const queue = [];
    const result = [];
    queue.push(start);
    result.push(start);
    visited[start] = 1;

    while (queue.length) {
      const current = queue.shift();
      for (let next of adjacencyList[current]) {
        if (!visited[next]) {
          queue.push(next);
          result.push(next);
          visited[next] = 1;
        }
      }
    }
    return result;
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

function cmpArray(a, b) {
  return a.toString() === b.toString();
}
