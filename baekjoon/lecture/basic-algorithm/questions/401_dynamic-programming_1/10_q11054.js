const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
const lengthOfSequence = input.shift();
const sequence = input;

const getMaxLengthOfPartialBitonic = (sequence) => {
  const { length } = sequence;
  const MIN_VALUE = 0;
  let ascending = new Array(length).fill(0);
  let descending = new Array(length).fill(0);
  let maxLength = new Array(length);
  let maxAscending;
  let maxDescending;

  for (let i = 0; i < length; i++) {
    maxAscending = MIN_VALUE;
    maxDescending = MIN_VALUE;
    for (let j = 0; j < i; j++) {
      if (sequence[i] > sequence[j]) {
        maxAscending = Math.max(maxAscending, ascending[j]);
      }
      if (sequence[length - i - 1] > sequence[length - j - 1]) {
        maxDescending = Math.max(maxDescending, descending[length - j - 1]);
      }
    }
    ascending[i] = maxAscending + 1;
    descending[length - i - 1] = maxDescending + 1;
  }

  for (let i = 0; i < length; i++) {
    maxLength[i] = ascending[i] + descending[i] - 1;
  }

  return Math.max(...maxLength);
};

const printMaxLengthOfPartialBitonic = () => {
  console.log(getMaxLengthOfPartialBitonic(sequence));
};

printMaxLengthOfPartialBitonic();
