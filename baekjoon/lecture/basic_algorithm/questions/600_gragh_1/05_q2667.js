const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const [mapSize, ...map] = input;

console.log(getComplex(map).join('\n'));

function getComplex(map) {
  const { length } = map;
  const visited = Array.from(Array(length), () => new Array(length));
  const EXIST = '1';
  let cntComplex = 0;
  let cntHouse = [];
  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (!visited[y][x] && map[y][x] === EXIST) {
        bfs([y, x]);
      }
    }
  }

  cntHouse.sort((a, b) => a - b);

  return [cntComplex, ...cntHouse];

  function bfs(coordinate) {
    const queue = [];
    let cnt = 0;
    let xCur, yCur;

    queue.push(coordinate);
    while (queue.length) {
      [yCur, xCur] = queue.shift();
      if (!visited[yCur][xCur] && map[yCur][xCur] === EXIST) {
        visited[yCur][xCur] = 1;
        cnt++;
        if (yCur - 1 >= 0) queue.push([yCur - 1, xCur]);
        if (yCur + 1 < length) queue.push([yCur + 1, xCur]);
        if (xCur - 1 >= 0) queue.push([yCur, xCur - 1]);
        if (xCur + 1 < length) queue.push([yCur, xCur + 1]);
      }
    }
    if (cnt) {
      cntHouse.push(cnt);
      cntComplex++;
    }
  }
}
