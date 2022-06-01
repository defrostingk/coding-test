const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split(' ');

(function solution(input) {
  const [a, b, c] = input.map(Number);
  if (a === b && b === c) return console.log(1);
  let found = 0;

  bfs(a, b, c);

  console.log(found);

  function bfs(startX, startY, startZ) {
    const queue = [[startX, startY, startZ]];
    const visited = new Set();
    visited.add([startX, startY, startZ].join(' '));
    let head = 0;

    while (queue.length > head) {
      const [curX, curY, curZ] = queue[head++].sort((a, b) => a - b);

      if (curX == curY && curY === curZ) {
        found = 1;
        return;
      }
      if (curX < curY) {
        let [x, y, z] = [curX, curY, curZ];
        x += curX;
        y -= curX;
        if (y <= 500 && x >= 1 && !visited.has([x, y, z].join(' '))) {
          visited.add([x, y, z].join(' '));
          queue.push([x, y, z]);
        }
      }
      if (curY < curZ) {
        let [x, y, z] = [curX, curY, curZ];
        y += curY;
        z -= curY;
        if (y <= 500 && z >= 1 && !visited.has([x, y, z].join(' '))) {
          visited.add([x, y, z].join(' '));
          queue.push([x, y, z]);
        }
      }
      if (curZ > curX) {
        let [x, y, z] = [curX, curY, curZ];
        x += curX;
        z -= curX;
        if (x <= 500 && z >= 1 && !visited.has([x, y, z].join(' '))) {
          visited.add([x, y, z].join(' '));
          queue.push([x, y, z]);
        }
      }
    }
  }
})(input);
