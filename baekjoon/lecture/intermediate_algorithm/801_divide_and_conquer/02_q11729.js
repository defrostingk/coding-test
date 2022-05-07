const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim();

(function solution(input) {
  const k = +input;
  let cnt = 0;
  let answer = [];

  hanoi(k, 1, 2, 3);

  console.log(cnt);
  console.log(answer.join('\n'));

  function hanoi(n, from, other, to) {
    if (n === 0) return;

    hanoi(n - 1, from, to, other);
    cnt++;
    answer.push(`${from} ${to}`);
    hanoi(n - 1, other, from, to);
  }
})(input);
