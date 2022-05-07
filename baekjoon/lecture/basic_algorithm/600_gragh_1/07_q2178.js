const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [height, width] = input[0].split(' ').map(Number);
const maze = input.slice(1);

console.log(getMinPath(maze, width, height));

function getMinPath(maze, width, height) {
  const visited = Array.from(Array(height), () => new Array(width));
  const AVAILABLE = '1';

  bfs([0, 0]);

  return visited[height - 1][width - 1];

  function bfs([x, y]) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const queue = [[x, y]];
    visited[y][x] = 1;

    while (queue.length) {
      const [xCur, yCur] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const xNext = xCur + dx[i];
        const yNext = yCur + dy[i];
        if (xNext >= 0 && yNext >= 0 && xNext < width && yNext < height) {
          if (maze[yNext][xNext] === AVAILABLE && !visited[yNext][xNext]) {
            visited[yNext][xNext] = visited[yCur][xCur] + 1;
            queue.push([xNext, yNext]);
          }
        }
      }
    }
  }
}
