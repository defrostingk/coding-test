const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim();

solution(input);

function solution(input) {
  const n = input
    .split('')
    .map(Number)
    .sort((a, b) => b - a);
  const sum = n.reduce((acc, cur) => acc + cur);
  if (!n.includes(0) || sum % 3 !== 0) return console.log(-1);

  console.log(n.join(''));
}
