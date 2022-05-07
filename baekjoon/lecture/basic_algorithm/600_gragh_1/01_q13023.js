const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [node, edge] = input.shift().split(' ').map(Number);
const numOfFriends = 4;

let adjList = Array.from(Array(node), () => new Array());

input.forEach((friend) => {
  const [nodeA, nodeB] = friend.split(' ').map(Number);
  adjList[nodeA].push(nodeB);
  adjList[nodeB].push(nodeA);
});

console.log(isExist(adjList));

function isExist(adjList) {
  const visited = new Array(node);
  let found = 0;

  for (let i = 0; i < node; i++) {
    dfs(0, adjList[i]);
  }

  return found;

  function dfs(depth, currentAdjList) {
    if (found) return;
    if (depth > numOfFriends) {
      found = 1;
      return;
    }
    for (let i = 0; i < currentAdjList.length; i++) {
      const nextNode = currentAdjList[i];
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        dfs(depth + 1, adjList[nextNode]);
        visited[nextNode] = false;
      }
    }
  }
}
