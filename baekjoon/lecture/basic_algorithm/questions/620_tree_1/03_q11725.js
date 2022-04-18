const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const nodes = +input[0];
const edges = input.slice(1).map((edge) => edge.split(' ').map(Number));

console.log(getParents(nodes, edges).join('\n'));

function getParents(nodes, edges) {
  const parents = new Array(nodes + 1);
  const adjacencyList = Array.from(Array(nodes + 1), () => new Array());
  edges.forEach((edge) => {
    const [from, to] = edge;
    adjacencyList[from].push(to);
    adjacencyList[to].push(from);
  });

  bfs(1);

  return parents.slice(2);

  function bfs(start) {
    const visited = new Array(nodes + 1);
    const queue = [start];
    visited[start] = 1;
    let head = 0;

    while (queue.length > head) {
      const current = queue[head++];
      for (let next of adjacencyList[current]) {
        if (!visited[next]) {
          parents[next] = current;
          visited[next] = 1;
          queue.push(next);
        }
      }
    }
  }
}
