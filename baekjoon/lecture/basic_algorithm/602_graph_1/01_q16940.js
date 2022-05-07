const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

console.log(isCorrectOrder(input));

function isCorrectOrder(input) {
  const nodes = +input[0];
  const edges = input.slice(1, -1).map((edge) => edge.split(' ').map(Number));
  const [answer] = input.slice(-1).map((str) => str.split(' ').map(Number));

  if (answer[0] !== 1) return 0;

  const adjacencyList = getAdjacencyList(nodes, edges);
  const order = new Array(nodes + 1);

  for (let i = 0; i < nodes; i++) {
    order[answer[i]] = i + 1;
  }

  adjacencyList.map((node) => node.sort((a, b) => order[a] - order[b]));

  return bfs(1);

  function bfs(start) {
    const visited = new Array(nodes + 1);
    const queue = [start];
    let head = 0;
    visited[start] = 1;

    while (queue.length > head) {
      const current = queue[head];
      if (answer[head++] !== current) return 0;
      for (let next of adjacencyList[current]) {
        if (!visited[next]) {
          queue.push(next);
          visited[next] = 1;
        }
      }
    }
    return 1;
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
