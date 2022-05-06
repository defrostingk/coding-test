const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const s = input[0];
  let t = input[1].split('');
  let found = 0;

  check(t);

  console.log(found);

  function check(target) {
    if (s.length === target.length) {
      found = s === target.join('') ? 1 : found;
      return;
    }

    const lastIdx = target.length - 1;
    if (target[lastIdx] === 'A') check(target.slice(0, lastIdx));
    if (target[0] === 'B') check(target.reverse().slice(0, lastIdx));
  }
})(input);
