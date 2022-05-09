const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split(/\s+/);

const digits = +input[0];
const start = input[1];
const [dx, dy] = [+input[2], +input[3]];

(function solution(digits, start, dx, dy) {
  const maxSize = 2 ** digits;

  let digitIdx = 0;
  let xStart, yStart;
  setStartXY(maxSize, 0, 0);

  const xNext = xStart + dx;
  const yNext = yStart - dy;
  if (xNext > maxSize - 1 || yNext > maxSize - 1 || xNext < 0 || yNext < 0) {
    console.log(-1);
    return;
  }

  const endNum = [];
  findEndNum(maxSize, xNext, yNext);
  console.log(endNum.join(''));

  function setStartXY(size, x, y) {
    if (size === 1) {
      xStart = x;
      yStart = y;
      return;
    }

    const digit = start[digitIdx++];
    const half = size / 2;

    if (digit === '1') {
      setStartXY(half, x + half, y);
    } else if (digit === '2') {
      setStartXY(half, x, y);
    } else if (digit === '3') {
      setStartXY(half, x, y + half);
    } else {
      setStartXY(half, x + half, y + half);
    }
  }

  function findEndNum(size, x, y) {
    if (size === 1) return;

    const half = size / 2;
    if (x >= half && y < half) {
      endNum.push(1);
      findEndNum(half, x - half, y);
    } else if (x < half && y < half) {
      endNum.push(2);
      findEndNum(half, x, y);
    } else if (x < half && y >= half) {
      endNum.push(3);
      findEndNum(half, x, y - half);
    } else {
      endNum.push(4);
      findEndNum(half, x - half, y - half);
    }
  }
})(digits, start, dx, dy);
