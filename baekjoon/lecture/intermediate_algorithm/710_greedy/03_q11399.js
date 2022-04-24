const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const people = +input[0];
const times = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(times.reduce((acc, cur, idx) => (acc += cur * (people - idx)), 0));
