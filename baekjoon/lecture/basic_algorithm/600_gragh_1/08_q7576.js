const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const RIPE_TOMATO = '1';
const EMPTY = '-1';

const [width, height] = input[0].split(' ').map(Number);
const box = input.slice(1).map((column) => column.split(' '));

console.log(getMinDays(width, height, box));

function getMinDays(width, height, box) {
  const visited = Array.from(Array(height), () => new Array(width).fill(0));
  const ripeTomato = getRipeTomato();
  let day = 0;

  visitEmpty();
  bfs(ripeTomato);

  for (let y = 0; y < height; y++) {
    if (visited[y].includes(0)) return -1;
  }

  return day;

  function getRipeTomato() {
    const ripeTomato = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (box[y][x] === RIPE_TOMATO) {
          ripeTomato.push([x, y]);
          visited[y][x] = 1;
        }
      }
    }
    return ripeTomato;
  }

  function visitEmpty() {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (box[y][x] === EMPTY) {
          visited[y][x] = -1;
        }
      }
    }
  }

  function bfs(start) {
    const queue = [...start];
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let xCur, yCur, xNext, yNext;
    let head = 0;

    while (queue.length > head) {
      [xCur, yCur] = queue[head++];
      for (let i = 0; i < 4; i++) {
        xNext = xCur + dx[i];
        yNext = yCur + dy[i];
        if (isAvailable(xNext, yNext)) {
          queue.push([xNext, yNext]);
          visited[yNext][xNext] = visited[yCur][xCur] + 1;
          day = visited[yCur][xCur];
        }
      }
    }
  }

  function isAvailable(x, y) {
    return x >= 0 &&
      x < width &&
      y >= 0 &&
      y < height &&
      !visited[y][x] &&
      box[y][x] !== EMPTY
      ? true
      : false;
  }
}
