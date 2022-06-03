const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const map = input.slice(1).map((row) => row.split('').map(Number));
  const [EMPTY, WALL] = [0, 1];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const group = Array.from(Array(height), () => new Array(width));
  const groupSize = {};
  let groupIdx = 0;
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (map[j][i] === WALL) continue;
      if (group[j][i]) continue;
      checkGroupSize(i, j, ++groupIdx);
    }
  }

  const answer = Array.from(Array(height), () => new Array(width).fill(0));
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (map[j][i] === EMPTY) continue;
      countAvailable(i, j);
    }
  }

  let answerStr = '';
  answer.forEach((row) => (answerStr += row.join('') + '\n'));
  console.log(answerStr.trim());

  function countAvailable(x, y) {
    const visitedGroup = new Set();
    for (let i = 0; i < dx.length; i++) {
      const [nextX, nextY] = [x + dx[i], y + dy[i]];
      if (!isInRange(nextX, nextY) || map[nextY][nextX] === WALL) continue;
      visitedGroup.add(group[nextY][nextX]);
    }
    let cnt = 1;
    visitedGroup.forEach((idx) => (cnt += groupSize[idx]));
    answer[y][x] = cnt % 10;
  }

  function checkGroupSize(startX, startY, idx) {
    const queue = [[startX, startY]];
    group[startY][startX] = idx;
    let head = 0;

    let cnt = 1;
    while (queue.length > head) {
      const [curX, curY] = queue[head++];
      for (let i = 0; i < dx.length; i++) {
        const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
        if (
          !isInRange(nextX, nextY) ||
          group[nextY][nextX] ||
          map[nextY][nextX] === WALL
        )
          continue;
        group[nextY][nextX] = idx;
        cnt++;
        queue.push([nextX, nextY]);
      }
    }
    groupSize[idx] = cnt;
  }

  function isInRange(x, y) {
    return x >= 0 && y >= 0 && x < width && y < height;
  }
})(input);
