const fs = require("fs");
const sequence = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

sequence.shift();
const getLongestAscendingSequence = (sequence) => {
  const { length } = sequence;
  let maxLength = new Array(length);
  maxLength[0] = 1;
  let ascending = new Array(length);
  let longestAscending;
  let max = 0;
  let idx = null;

  for (let i = 0; i < length; i++) {
    ascending[i] = [sequence[i]];
  }

  for (let i = 1; i < length; i++) {
    max = 0;
    idx = null;
    for (let j = 0; j < i; j++) {
      if (sequence[i] > sequence[j] && maxLength[j] > max) {
        max = maxLength[j];
        idx = j;
      }
    }
    maxLength[i] = max + 1;
    if (idx !== null) {
      ascending[i] = ascending[idx].concat(sequence[i]);
    }
  }

  longestAscending = ascending[maxLength.indexOf(Math.max(...maxLength))];
  return longestAscending;
};

const longestAscendingSequence = getLongestAscendingSequence(sequence);

console.log(longestAscendingSequence.length);
console.log(longestAscendingSequence.join(" "));
