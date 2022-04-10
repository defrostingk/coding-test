const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const mapSize = +input[0];
const map = input.slice(1).map((column) => column.split(' '));
const ISLAND = '1';
const SEA = '0';

console.log(getShortestBridge(map, mapSize));

function getShortestBridge(map, mapSize) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const bridges = [];
  let checked = Array.from(Array(mapSize), () => new Array(mapSize));

  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      if (map[y][x] === ISLAND && !checked[y][x]) {
        checked = checkIsland([x, y]);
        bfs([x, y], checked);
      }
    }
  }

  return Math.min(...bridges);

  function checkIsland([x, y]) {
    const checked = Array.from(Array(mapSize), () => new Array(mapSize));
    const queue = [[x, y]];
    let head = 0;
    checked[y][x] = 1;

    while (queue.length > head) {
      const [xCur, yCur] = queue[head++];
      for (let i = 0; i < dx.length; i++) {
        const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
        if (isInRange(xNext, yNext)) {
          if (!checked[yNext][xNext] && isIsland(xNext, yNext)) {
            queue.push([xNext, yNext]);
            checked[yNext][xNext] = 1;
          }
        }
      }
    }

    return checked;
  }

  function bfs([x, y], checked) {
    const visited = Array.from(Array(mapSize), () => new Array(mapSize));
    const queue = [[x, y]];
    let head = 0;

    for (let j = 0; j < mapSize; j++) {
      for (let i = 0; i < mapSize; i++) {
        visited[j][i] = checked[j][i];
      }
    }

    while (queue.length > head) {
      const [xCur, yCur] = queue[head++];
      for (let i = 0; i < dx.length; i++) {
        const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
        if (isInRange(xNext, yNext)) {
          if (!visited[yNext][xNext]) {
            queue.push([xNext, yNext]);
            visited[yNext][xNext] = visited[yCur][xCur] + 1;
            if (seaToIsland(xCur, yCur, xNext, yNext)) {
              const length = visited[yNext][xNext] - visited[y][x] - 1;
              bridges.push(length);
              return;
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
  function seaToIsland(xCur, yCur, xNext, yNext) {
    return map[yCur][xCur] === SEA && map[yNext][xNext] === ISLAND;
  }
}
