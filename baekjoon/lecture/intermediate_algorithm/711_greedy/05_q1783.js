const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

solution(input);

function solution(input) {
  const [height, width] = input;
  let cnt;

  if (height === 1) {
    cnt = 1;
  } else if (height === 2) {
    cnt = Math.min(4, Math.ceil(width / 2));
  } else {
    if (width > 6) {
      cnt = width - 2;
    } else {
      cnt = Math.min(4, width);
    }
  }

  console.log(cnt);
}
