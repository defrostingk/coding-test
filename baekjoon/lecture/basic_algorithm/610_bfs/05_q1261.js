const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((column) => column.split('').map(Number));

console.log(cntBrokenWall(m, n, maze));

function cntBrokenWall(m, n, maze) {
  const visited = Array.from(Array(n), () => new Array(m));
  const queue = [[0, 0, 0]];
  visited[0][0] = 1;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [xCur, yCur, cnt] = queue.shift();
    if (xCur === m - 1 && yCur === n - 1) return cnt;

    for (let i = 0; i < dx.length; i++) {
      const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
      if (isAvailable(xNext, yNext)) {
        visited[yNext][xNext] = 1;
        if (maze[yNext][xNext]) {
          queue.push([xNext, yNext, cnt + 1]);
        } else {
          queue.unshift([xNext, yNext, cnt]);
        }
      }
    }
  }

  function isAvailable(x, y) {
    return x >= 0 && y >= 0 && x < m && y < n && !visited[y][x];
  }
}
