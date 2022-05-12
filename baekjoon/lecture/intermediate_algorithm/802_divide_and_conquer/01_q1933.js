const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const buildings = input.slice(1).map((building) => {
    const [left, height, right] = building.split(' ').map(Number);
    return { left, right, height };
  });

  // x좌표의 범위 구하기
  let maxRight = 0;
  for (let i = 0; i < n - 1; i++) {
    if (maxRight < buildings[i].right) {
      maxRight = buildings[i].right;
    }
  }

  // 각 x좌표의 최대 height 구하기
  const heights = new Array(maxRight + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = buildings[i].left; j < buildings[i].right; j++) {
      if (heights[j] < buildings[i].height) {
        heights[j] = buildings[i].height;
      }
    }
  }

  // 최대 높이가 바뀌는 지점 저장하기
  const skyline = [];
  let prevHeight = 0;
  for (let i = 0; i <= maxRight; i++) {
    if (prevHeight !== heights[i]) {
      skyline.push([i, heights[i]]);
      prevHeight = heights[i];
    }
  }

  console.log(skyline.flat().join(' '));
})(input);
