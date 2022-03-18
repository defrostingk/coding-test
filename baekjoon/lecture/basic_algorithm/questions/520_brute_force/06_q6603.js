const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const testCases = input
  .slice(0, input.length - 1)
  .map((testCase) => testCase.split(/\s+/).map(Number).slice(1));

test(testCases);

function test(testCases) {
  let result = '';
  testCases.forEach((testCase) => (result += `${getLottoNums(testCase)}\n`));
  console.log(result.trim());
}

function getLottoNums(nums) {
  const { length } = nums;
  const visited = new Array(length);
  const part = [];
  const LOTTO_LENGTH = 6;
  let lottoNums = '';

  dfs(0, 0);

  return lottoNums;

  function dfs(depth, idx) {
    if (depth === LOTTO_LENGTH) {
      lottoNums += `${part.join(' ')}\n`;
      return;
    }
    for (let i = idx; i < length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        part.push(nums[i]);
        dfs(depth + 1, i);
        part.pop();
        visited[i] = false;
      }
    }
  }
}
