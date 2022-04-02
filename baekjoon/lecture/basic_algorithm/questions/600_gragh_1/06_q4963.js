const fs = require('fs');

function getTestCases() {
  const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
  const testCases = [];
  let width, height, testCase;
  while (input.length) {
    [width, height] = input.shift().split(' ').map(Number);
    if (!width && !height) break;
    testCase = new Array(height + 1);
    testCase[0] = [width, height];
    for (let i = 1; i <= height; i++) {
      testCase[i] = input.shift().split(' ');
    }
    testCases.push(testCase);
  }
  return testCases;
}

const testCases = getTestCases();

test(testCases);

function test(testCases) {
  let result = '';
  testCases.forEach((testCase) => {
    let [width, height] = testCase.shift();
    result += cntIsland(testCase, width, height) + '\n';
  });
  console.log(result.trim());
}

function cntIsland(map, width, height) {
  const visited = Array.from(Array(height), () => new Array(width));
  const ISLAND = '1';
  let cnt = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!visited[y][x] && map[y][x] === ISLAND) {
        bfs([x, y]);
        cnt++;
      }
    }
  }

  return cnt;

  function bfs([x, y]) {
    const queue = [[x, y]];
    let xCur, yCur, xNext, yNext;
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];

    while (queue.length) {
      [xCur, yCur] = queue.shift();
      if (!visited[yCur][xCur] && map[yCur][xCur] === ISLAND) {
        visited[yCur][xCur] = 1;
        for (let i = 0; i < 8; i++) {
          xNext = xCur + dx[i];
          yNext = yCur + dy[i];
          if (xNext >= 0 && xNext < width && yNext >= 0 && yNext < height) {
            queue.push([xNext, yNext]);
          }
        }
      }
    }
  }
}
