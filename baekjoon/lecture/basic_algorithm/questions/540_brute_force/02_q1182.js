const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [num, sum] = input.shift().split(' ').map(Number);
const sequence = input.shift().split(' ').map(Number);

console.log(getPartialSequence(sequence, sum));

function getPartialSequence(sequence, sum) {
  const { length } = sequence;
  let cnt = 0;

  counter(0, 0);

  return cnt;

  function counter(idx, sumOfSequence) {
    if (idx >= length) {
      return;
    }
    sumOfSequence += sequence[idx];
    if (sumOfSequence === sum) {
      cnt++;
    }
    counter(idx + 1, sumOfSequence);
    counter(idx + 1, sumOfSequence - sequence[idx]);
  }
}
