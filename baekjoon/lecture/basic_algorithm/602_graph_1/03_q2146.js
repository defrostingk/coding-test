const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const mapSize = +input[0];
const map = input.slice(1).map((column) => column.split(' '));
const ISLAND = '1';

console.log(getShortestBridge(map, mapSize));

function getShortestBridge(map, mapSize) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const bridges = [];
  const checked = Array.from(Array(mapSize), () => new Array(mapSize));
  const visited = Array.from(Array(mapSize), () => new Array(mapSize));
  let id = 1;

  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      if (map[y][x] === ISLAND && !checked[y][x]) {
        checkIsland([x, y], (id++).toString());
      }
    }
  }

  getVisited();
  getDistance();

  return Math.min(...bridges);

  function checkIsland([x, y], id) {
    const queue = [[x, y]];
    let head = 0;
    checked[y][x] = id;

    while (queue.length > head) {
      const [xCur, yCur] = queue[head++];
      for (let i = 0; i < dx.length; i++) {
        const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
        if (isInRange(xNext, yNext)) {
          if (!checked[yNext][xNext] && isIsland(xNext, yNext)) {
            queue.push([xNext, yNext]);
            checked[yNext][xNext] = id;
          }
        }
      }
    }
  }

  function getVisited() {
    const queue = [];
    let head = 0;

    for (let y = 0; y < mapSize; y++) {
      for (let x = 0; x < mapSize; x++) {
        if (checked[y][x]) {
          queue.push([x, y]);
          visited[y][x] = 1;
        }
      }
    }

    while (queue.length > head) {
      const [xCur, yCur] = queue[head++];
      for (let i = 0; i < dx.length; i++) {
        const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
        if (isInRange(xNext, yNext)) {
          if (!checked[yNext][xNext]) {
            queue.push([xNext, yNext]);
            checked[yNext][xNext] = checked[yCur][xCur];
            visited[yNext][xNext] = visited[yCur][xCur] + 1;
          }
        }
      }
    }
  }

  function getDistance() {
    for (let y = 0; y < mapSize; y++) {
      for (let x = 0; x < mapSize; x++) {
        for (let i = 0; i < dx.length; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (isInRange(nx, ny)) {
            if (checked[ny][nx] !== checked[y][x]) {
              const distance = visited[y][x] + visited[ny][nx] - 2;
              bridges.push(distance);
            }
          }
        }
      }
    }
  }

  function isInRange(x, y) {
    return x >= 0 && y >= 0 && x < mapSize && y < mapSize;
  }
  function isIsland(x, y) {
    return map[y][x] === ISLAND;
  }
}
