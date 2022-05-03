const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const arrA = input[1].split(' ').map(Number);
  const arrB = input[2].split(' ').map(Number);

  console.log([...arrA, ...arrB].sort((a, b) => a - b).join(' '));
}
