const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const buildings = input
    .slice(1)
    .map((building) => {
      const [left, height, right] = building.split(' ').map(Number);
      return { left, right, height };
    })
    .sort((a, b) => (a.left > b.left ? 1 : -1));

  const skyLine = getSkyLine(0, n - 1);

  const answer = [];
  skyLine.forEach(({ x, height }) => answer.push(x, height));
  console.log(answer.join(' '));

  function merge(left, right) {
    let leftIdx = 0;
    let rightIdx = 0;
    let leftHeight = 0;
    let rightHeight = 0;

    const result = [];
    while (leftIdx < left.length && rightIdx < right.length) {
      const leftBuilding = left[leftIdx];
      const rightBuilding = right[rightIdx];
      let x, height;

      if (leftBuilding.x >= rightBuilding.x) {
        x = rightBuilding.x;
        rightHeight = rightBuilding.height;
        height = Math.max(leftHeight, rightHeight);
        rightIdx++;
      } else {
        x = leftBuilding.x;
        leftHeight = leftBuilding.height;
        height = Math.max(leftHeight, rightHeight);
        leftIdx++;
      }

      if (result.length > 0) {
        if (height === result[result.length - 1].height) {
          continue;
        }
        if (x === result[result.length - 1].x) {
          result[result.length - 1].height = height;
          continue;
        }
      }
      result.push({ x, height });
    }

    while (leftIdx < left.length) {
      result.push(left[leftIdx]);
      leftIdx++;
    }

    while (rightIdx < right.length) {
      result.push(right[rightIdx]);
      rightIdx++;
    }

    return result;
  }

  function getSkyLine(start, end) {
    if (start === end) {
      return [
        { x: buildings[start].left, height: buildings[start].height },
        { x: buildings[start].right, height: 0 },
      ];
    }

    const mid = Math.floor((start + end) / 2);
    const left = getSkyLine(start, mid);
    const right = getSkyLine(mid + 1, end);

    return merge(left, right);
  }
})(input);
