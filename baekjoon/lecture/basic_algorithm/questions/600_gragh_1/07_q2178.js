const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [height, width] = input[0].split(' ').map(Number);
const maze = input.slice(1);

console.log(getMinPath(maze, width, height));

function getMinPath(maze, width, height) {
  const visited = Array.from(Array(height), () => new Array(width));
  const AVAILABLE = '1';
  const cnt = [];
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  dfs([0, 0], 0);

  return Math.min(...cnt);

  function dfs([x, y], depth) {
    if (x === width - 1 && y === height - 1) {
      cnt.push(depth + 1);
      return;
    }
    let xNext, yNext;
    for (let i = 0; i < 4; i++) {
      xNext = x + dx[i];
      yNext = y + dy[i];
      if (xNext >= 0 && yNext >= 0 && xNext < width && yNext < height) {
        if (maze[yNext][xNext] === AVAILABLE && !visited[yNext][xNext]) {
          visited[yNext][xNext] = 1;
          dfs([xNext, yNext], depth + 1);
          visited[yNext][xNext] = 0;
        }
      }
    }
  }
}
