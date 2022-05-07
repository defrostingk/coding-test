const fs = require('fs');

test();

function test() {
  const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
  const testCasesSize = input[0];
  const testCases = input.slice(1);
  let result = '';

  for (let i = 0; i < testCasesSize; i++) {
    const length = Number(testCases[i * 3]);
    const start = testCases[i * 3 + 1].split(' ').map(Number);
    const end = testCases[i * 3 + 2].split(' ').map(Number);
    const minTimes = getMinTimesOfKnightMoving(length, start, end);
    result += minTimes + '\n';
  }

  console.log(result.trim());
}

function getMinTimesOfKnightMoving(length, start, end) {
  const visited = Array.from(Array(length), () => new Array(length).fill(0));
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
  const queue = [start];
  const [xEnd, yEnd] = end;
  let head = 0;
  visited[start[1]][start[0]] = 1;

  while (queue.length > head) {
    const [xCur, yCur] = queue[head++];
    if (xCur === xEnd && yCur === yEnd) {
      return visited[yCur][xCur] - 1;
    }
    for (let i = 0; i < dx.length; i++) {
      const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
      if (isAvailable(xNext, yNext)) {
        visited[yNext][xNext] = visited[yCur][xCur] + 1;
        queue.push([xNext, yNext]);
      }
    }
  }

  return -1;

  function isAvailable(x, y) {
    return x >= 0 && x < length && y >= 0 && y < length && !visited[y][x]
      ? true
      : false;
  }
}
