const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

test(input);

function test(input) {
  const testCases = +input.shift();
  let data = input.map((column) => column.split(' ').map(Number));
  let node, edge, nodeConnection;
  let result = '';

  for (let i = 0; i < testCases; i++) {
    [node, edge] = data[0];
    nodeConnection = data.slice(1, edge + 1);
    result += isBipartiteGraph(node, nodeConnection) ? 'YES\n' : 'NO\n';
    data = data.slice(edge + 1);
  }
  console.log(result.trim());
}

function isBipartiteGraph(node, nodeConnection) {
  const adjList = getAdjacencyList(node, nodeConnection);
  const visited = new Array(node + 1);

  for (let i = 1; i <= node; i++) {
    dfs(i, 1);
  }

  for (let i = 1; i <= node; i++) {
    for (let j = 0; j < adjList[i].length; j++) {
      if (visited[i] === visited[adjList[i][j]]) {
        return false;
      }
    }
  }

  return true;

  function dfs(nodeStart, visitedGroup) {
    if (visited[nodeStart]) return;
    visited[nodeStart] = visitedGroup;
    for (let i = 0; i < adjList[nodeStart].length; i++) {
      let nodeNext = adjList[nodeStart][i];
      if (!visited[nodeNext]) {
        dfs(nodeNext, -visitedGroup);
      }
    }
  }
}

function getAdjacencyList(node, nodeConnection) {
  const adjacencyList = Array.from(Array(node + 1), () => new Array());
  for (let i = 0; i < nodeConnection.length; i++) {
    adjacencyList[nodeConnection[i][0]].push(nodeConnection[i][1]);
    adjacencyList[nodeConnection[i][1]].push(nodeConnection[i][0]);
  }
  return adjacencyList;
}
