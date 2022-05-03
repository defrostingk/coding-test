const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const numbers = input[1].split(' ').map(Number);
  const target = input[3].split(' ').map(Number);

  const map = new Map();
  numbers.forEach((number) => {
    if (map.has(number)) map.set(number, map.get(number) + 1);
    else map.set(number, 1);
  });

  console.log(
    target.map((number) => (map.has(number) ? map.get(number) : 0)).join(' ')
  );
}
