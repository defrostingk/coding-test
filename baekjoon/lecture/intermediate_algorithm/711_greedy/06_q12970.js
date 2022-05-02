const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

solution(input);

function solution(input) {
  const [n, k] = input;
  const a = Math.floor(n / 2);
  const b = n - a;
  if (a * b < k) return console.log(-1);

  let ab = new Array(n).fill('B');

  let cnt = 0;
  let cntA = 0;
  while (k > cnt) {
    let idx = ab.length - 1;
    cnt -= cntA;
    cntA++;
    ab[idx] = 'A';
    while (idx > 0) {
      idx--;
      let tmp = ab[idx];
      ab[idx] = ab[idx + 1];
      ab[idx + 1] = tmp;
      if (ab[idx] !== ab[idx + 1]) cnt++;
      if (cnt === k) break;
    }
  }

  console.log(ab.join(''));
}
