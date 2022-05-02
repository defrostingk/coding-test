const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

solution(input);

function solution(input) {
  let [females, males, interns] = input;

  let teams = Math.min(Math.floor(females / 2), males);
  let remainder = females + males - teams * 3 - interns;
  teams += Math.min(Math.floor(remainder / 3), 0);
  console.log(teams);
}
