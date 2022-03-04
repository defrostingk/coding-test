const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const sequenceLength = input.shift();
const sequence = input;

const getLengthOfLongestDescendingSequence = (sequence) => {
  const oriLength = sequence.length;
  const length = new Array(oriLength).fill(0);
  const MIN_VALUE = 0;
  let max;

  for (let i = 0; i < oriLength; i++) {
    max = MIN_VALUE;
    for (let j = 0; j < i; j++) {
      if (sequence[i] < sequence[j]) {
        max = Math.max(max, length[j]);
      }
    }
    length[i] = max + 1;
  }

  return Math.max(...length);
};

const printLengthOfLongestDescendingSequence = () => {
  console.log(getLengthOfLongestDescendingSequence(sequence));
};

printLengthOfLongestDescendingSequence();
