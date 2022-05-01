const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const sequence = input.slice(1).map(Number);
  const positive = sequence.filter((num) => num > 0).sort((a, b) => b - a);
  const negative = sequence.filter((num) => num < 0).sort((a, b) => a - b);

  let sum = 0;

  let positiveIdx = 0;
  while (positiveIdx < positive.length) {
    const first = positive[positiveIdx++];
    if (positiveIdx >= positive.length) {
      sum += first;
      break;
    }
    const second = positive[positiveIdx++];
    const production = first * second;
    const addition = first + second;
    sum += production > addition ? production : addition;
  }

  let negativeIdx = 0;
  while (negativeIdx < negative.length) {
    const first = negative[negativeIdx++];
    if (negativeIdx >= negative.length) {
      sum += sequence.includes(0) ? 0 : first;
      break;
    }
    const second = negative[negativeIdx++];
    sum += first * second;
  }

  console.log(sum);
}
