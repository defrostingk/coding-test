const fs = require('fs');

console.log(isCycleExist());

function isCycleExist() {
  const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
  const [height, width] = input[0].split(' ').map(Number);
  const board = input.slice(1);
  const visited = Array.from(Array(height), () => new Array(width));
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let exist = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (exist) return 'Yes';
      for (let i = 0; i < height; i++) {
        visited[i].fill(0);
      }
      const color = board[y][x];
      dfs([x, y], [x, y], 1, color);
    }
  }

  return 'No';

  function dfs(startNode, currentNode, depth, color) {
    const [xCur, yCur] = currentNode;
    if (visited[yCur][xCur]) {
      if (depth >= 4 && cmpNode(startNode, [xCur, yCur])) {
        exist = 1;
      }
      return;
    }
    visited[yCur][xCur] = 1;
    for (let i = 0; i < dx.length; i++) {
      const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
      if (isAvailable(xNext, yNext))
        dfs(startNode, [xNext, yNext], depth + 1, color);
    }

    function isAvailable(x, y) {
      return x >= 0 &&
        x < width &&
        y >= 0 &&
        y < height &&
        color === board[y][x]
        ? true
        : false;
    }

    function cmpNode(nodeA, nodeB) {
      return nodeA[0] === nodeB[0] && nodeA[1] === nodeB[1] ? true : false;
    }
  }
}
