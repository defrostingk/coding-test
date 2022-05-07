const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const stations = +input[0];
const connections = input.slice(1);

console.log(getAllDistanceToCycle(stations, connections));

function getAllDistanceToCycle(stations, connections) {
  const adjacencyList = getAdjacencyList(stations, connections);
  const visited = new Array(stations + 1);
  let cycle, isCycleExist;
  const distance = [];

  for (let i = 1; i <= stations; i++) {
    visited[i] = 1;
    getStartOfCycle(i, i, 0);
    visited[i] = 0;
    if (isCycleExist) break;
  }

  for (let i = 1; i <= stations; i++) {
    if (cycle[i]) {
      distance.push(0);
    } else {
      distance.push(getDistanceToCycle(i, cycle));
    }
  }

  return distance.join(' ');

  // dfs
  function getStartOfCycle(start, current, depth) {
    for (let next of adjacencyList[current]) {
      if (start === next && depth > 1) {
        cycle = visited.slice();
        isCycleExist = 1;
        return;
      }
      if (!visited[next]) {
        visited[next] = 1;
        getStartOfCycle(start, next, depth + 1);
        visited[next] = 0;
      }
    }
  }

  // bfs
  function getDistanceToCycle(start, cycle) {
    const queue = [start];

    visited.fill(0);
    visited[start] = 1;

    while (queue.length) {
      const current = queue.shift();
      for (let next of adjacencyList[current]) {
        if (cycle[next]) {
          return visited[current];
        }
        if (!visited[next]) {
          visited[next] = visited[current] + 1;
          queue.push(next);
        }
      }
    }
  }
}

function getAdjacencyList(stations, connections) {
  const adjList = Array.from(Array(stations + 1), () => new Array());

  connections.forEach((connection) => {
    const [from, to] = connection.split(' ').map(Number);
    adjList[from].push(to);
    adjList[to].push(from);
  });

  return adjList;
}
