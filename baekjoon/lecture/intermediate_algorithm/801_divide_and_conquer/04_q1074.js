const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const [n, r, c] = input;

(function solution(n, r, c) {
  const size = 2 ** (2 * n);
  const target = { y: r, x: c };
  let cnt = 0;

  check(size, 0, 0);

  function check(size, x, y) {
    if (x === target.x && y === target.y) {
      console.log(cnt);
      return;
    }

    if (
      target.x >= x &&
      target.x < x + size &&
      target.y >= y &&
      target.y < y + size
    ) {
      const halfSize = size / 2;
      check(halfSize, x, y);
      check(halfSize, x + halfSize, y);
      check(halfSize, x, y + halfSize);
      check(halfSize, x + halfSize, y + halfSize);
    } else {
      cnt += size * size;
    }
  }
})(n, r, c);
