const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const area = input.slice(1).map((row) => row.split(' '));
  const [EMPTY, WALL, VIRUS] = ['0', '1', '2'];

  class Block {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const virus = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (area[y][x] === VIRUS) {
        virus.push(new Block(x, y));
      }
    }
  }

  const visited = Array.from(Array(height), () => new Array(width));
  let safetyArea = 0;
  dfs(0, 0);
  console.log(safetyArea);

  function dfs(cnt, start) {
    if (cnt >= 3) {
      const curArea = Array.from(Array(height), () => new Array(width));
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          curArea[y][x] = area[y][x];
        }
      }
      bfs(virus, curArea);
      let cnt = 0;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (curArea[y][x] === EMPTY) cnt++;
        }
      }
      safetyArea = Math.max(safetyArea, cnt);
      return;
    }
    for (let i = start; i < width * height; i++) {
      const nextX = i % width;
      const nextY = Math.floor(i / width);
      if (!visited[nextY][nextX] && area[nextY][nextX] === EMPTY) {
        visited[nextY][nextX] = 1;
        area[nextY][nextX] = WALL;
        dfs(cnt + 1, i);
        visited[nextY][nextX] = 0;
        area[nextY][nextX] = EMPTY;
      }
    }
  }

  function bfs(start, curArea) {
    const queue = [];
    start.forEach((block) => queue.push(block));
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let head = 0;

    while (queue.length > head) {
      const curBlock = queue[head++];
      for (let i = 0; i < dx.length; i++) {
        const nextBlock = new Block(curBlock.x + dx[i], curBlock.y + dy[i]);
        if (
          isAvailable(nextBlock.x, nextBlock.y) &&
          curArea[nextBlock.y][nextBlock.x] === EMPTY
        ) {
          curArea[nextBlock.y][nextBlock.x] = VIRUS;
          queue.push(nextBlock);
        }
      }
    }

    function isAvailable(x, y) {
      return x >= 0 && y >= 0 && x < width && y < height;
    }
  }
})(input);
