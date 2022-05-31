const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const area = input.slice(1).map((row) => row.split(' ').map(Number));
  const [EMPTY, WALL, VIRUS] = [0, 1, 2];

  const virus = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (area[y][x] === VIRUS) {
        virus.push([x, y]);
      }
    }
  }

  let safetyArea = 0;
  dfs(0, 0);
  console.log(safetyArea);

  function dfs(cnt, start) {
    if (cnt >= 3) {
      const curArea = copyArea();
      virus.forEach(([x, y]) => spreadVirus(x, y, curArea));
      safetyArea = Math.max(safetyArea, countEmpty(curArea));
      return;
    }

    for (let i = start; i < width * height; i++) {
      const nextX = i % width;
      const nextY = Math.floor(i / width);
      if (area[nextY][nextX] === EMPTY) {
        area[nextY][nextX] = WALL;
        dfs(cnt + 1, i + 1);
        area[nextY][nextX] = EMPTY;
      }
    }
  }

  function copyArea() {
    const copy = Array.from(Array(height), () => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        copy[y][x] = area[y][x];
      }
    }
    return copy;
  }

  function countEmpty(area) {
    let cnt = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (area[y][x] === EMPTY) cnt++;
      }
    }
    return cnt;
  }

  function spreadVirus(x, y, curArea) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    for (let i = 0; i < dx.length; i++) {
      const [nextX, nextY] = [x + dx[i], y + dy[i]];
      if (isAvailable(nextX, nextY)) {
        curArea[nextY][nextX] = VIRUS;
        spreadVirus(nextX, nextY, curArea);
      }
    }

    function isAvailable(x, y) {
      return (
        x >= 0 && y >= 0 && x < width && y < height && curArea[y][x] === EMPTY
      );
    }
  }
})(input);
