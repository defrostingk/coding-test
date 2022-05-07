const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const sequence = input.shift().split(/\s+/).map(Number);

console.log(getPreviousPermutation(sequence));

function getPreviousPermutation(sequence) {
  const { length } = sequence;
  let idx = length - 1;
  let swapIdx = length - 1;
  let fixed, part;

  while (sequence[idx - 1] < sequence[idx]) {
    idx--;
  }
  idx--;
  if (idx < 0) {
    return -1;
  }

  while (sequence[idx] < sequence[swapIdx]) {
    swapIdx--;
  }

  [sequence[idx], sequence[swapIdx]] = [sequence[swapIdx], sequence[idx]];

  fixed = sequence.slice(0, idx + 1);
  part = sequence.slice(idx + 1).sort((a, b) => b - a);

  return [...fixed, ...part].join(' ');
}
