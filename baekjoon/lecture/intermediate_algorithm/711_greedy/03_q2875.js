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
  let required = females + males - teams * 3 - interns;
  teams += Math.min(Math.floor(required / 3), 0);
  console.log(teams);
}
