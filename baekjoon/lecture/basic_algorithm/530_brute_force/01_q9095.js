const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const testCases = input.slice(1);

test(testCases);

function test(testCases) {
  let result = '';
  testCases.forEach((testCase) => {
    result += getNumOfCasesToMake(testCase) + '\n';
  });
  console.log(result.trim());
}

function getNumOfCasesToMake(num) {
  let cnt = new Array(num);
  cnt[0] = 1;
  cnt[1] = 1;
  cnt[2] = 2;
  for (let i = 3; i <= num; i++) {
    cnt[i] = cnt[i - 1] + cnt[i - 2] + cnt[i - 3];
  }
  return cnt[num];
}
