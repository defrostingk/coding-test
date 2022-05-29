const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const [startX, startY, endX, endY] = input[1].split(' ').map(Number);

  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];

  class Block {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const start = new Block(startX, startY);
  const end = new Block(endX, endY);

  console.log(bfs(start, end));

  function bfs(start, end) {
    const visited = Array.from(Array(n), () => new Array(n));
    visited[start.y][start.x] = 1;
    const queue = [start];
    let head = 0;

    while (queue.length > head) {
      const curBlock = queue[head++];
      if (curBlock.x === end.x && curBlock.y === end.y)
        return visited[curBlock.y][curBlock.x] - 1;

      for (let i = 0; i < dx.length; i++) {
        const nextBlock = new Block(curBlock.x + dx[i], curBlock.y + dy[i]);
        if (
          isInRange(nextBlock.x, nextBlock.y) &&
          !visited[nextBlock.y][nextBlock.x]
        ) {
          visited[nextBlock.y][nextBlock.x] =
            visited[curBlock.y][curBlock.x] + 1;
          queue.push(nextBlock);
        }
      }
    }

    return -1;
  }

  function isInRange(x, y) {
    return x >= 0 && y >= 0 && x < n && y < n;
  }
})(input);
