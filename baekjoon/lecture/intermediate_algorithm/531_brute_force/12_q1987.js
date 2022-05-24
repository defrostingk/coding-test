const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ');
  const board = input
    .slice(1)
    .map((row) => row.split('').map((char) => char.charCodeAt() - 65));

  const visited = new Array(26);
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let maxLength = 0;

  visited[board[0][0]] = 1;

  dfs(0, 0, 1);

  console.log(maxLength);

  function dfs(x, y, cnt) {
    maxLength = Math.max(maxLength, cnt);
    for (let i = 0; i < dx.length; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (isAvailable(nextX, nextY)) {
        const nextValue = board[nextY][nextX];
        if (!visited[nextValue]) {
          visited[nextValue] = 1;
          dfs(nextX, nextY, cnt + 1);
          visited[nextValue] = 0;
        }
      }
    }
  }

  function isAvailable(x, y) {
    return x >= 0 && y >= 0 && x < width && y < height;
  }
})(input);
