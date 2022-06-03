const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const oriMap = input.slice(1).map((row) => row.split('').map(Number));
  const [EMPTY, WALL] = [0, 1];

  console.log(bfs(oriMap));

  function bfs(map) {
    const queue = [[0, 0, 0]];
    const visited = Array.from(Array(height), () =>
      Array.from(Array(width), () => new Array(2))
    );
    visited[0][0][0] = 1;
    let head = 0;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    while (queue.length > head) {
      const [curX, curY, wall] = queue[head++];
      if (curY === height - 1 && curX === width - 1) {
        return visited[curY][curX][wall];
      }

      for (let i = 0; i < dx.length; i++) {
        const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
        if (isAvailable(nextX, nextY, wall)) {
          if (map[nextY][nextX] === EMPTY) {
            visited[nextY][nextX][wall] = visited[curY][curX][wall] + 1;
            queue.push([nextX, nextY, wall]);
          }
          if (!wall && map[nextY][nextX] === WALL) {
            visited[nextY][nextX][wall + 1] = visited[curY][curX][wall] + 1;
            queue.push([nextX, nextY, wall + 1]);
          }
        }
      }
    }
    return -1;

    function isAvailable(x, y, wall) {
      return (
        x >= 0 && y >= 0 && x < width && y < height && !visited[y][x][wall]
      );
    }
  }
})(input);
