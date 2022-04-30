const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim();

solution(input);

function solution(input) {
  const added = input.split('-').map((nums) =>
    nums
      .split('+')
      .map(Number)
      .reduce((acc, cur) => acc + cur)
  );
  const result = added.reduce((acc, cur) => acc - cur);

  console.log(result);
}
