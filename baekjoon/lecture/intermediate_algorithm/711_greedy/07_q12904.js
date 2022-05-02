const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const s = input[0];
  let t = input[1].split('');

  while (s.length < t.length) {
    if (t.pop() === 'B') t = t.reverse();
  }

  s === t.join('') ? console.log(1) : console.log(0);
}
