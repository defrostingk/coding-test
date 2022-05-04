const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const matrix = input.slice(1).map((column) => column.split(' '));
  const cnt = [0, 0, 0];

  check(0, 0, n);

  console.log(cnt.join('\n'));

  function check(startX, startY, size) {
    const refer = matrix[startY][startX];
    for (let y = startY; y < startY + size; y++) {
      for (let x = startX; x < startX + size; x++) {
        if (refer !== matrix[y][x]) {
          check(startX, startY, size / 3);
          check(startX + size / 3, startY, size / 3);
          check(startX + (size * 2) / 3, startY, size / 3);
          check(startX, startY + size / 3, size / 3);
          check(startX + size / 3, startY + size / 3, size / 3);
          check(startX + (size * 2) / 3, startY + size / 3, size / 3);
          check(startX, startY + (size * 2) / 3, size / 3);
          check(startX + size / 3, startY + (size * 2) / 3, size / 3);
          check(startX + (size * 2) / 3, startY + (size * 2) / 3, size / 3);
          return;
        }
      }
    }
    if (refer === '-1') cnt[0]++;
    else if (refer === '0') cnt[1]++;
    else cnt[2]++;
  }
})(input);
