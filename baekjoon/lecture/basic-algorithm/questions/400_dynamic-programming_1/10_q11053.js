const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
const sequence = input.shift().split(/\s/).map(Number);

const getLengthOfLongestAscendingSequence = (sequence) => {
  let maxLength = new Array(sequence.length);
  let tmp = 0;
  maxLength[0] = 1;
  for (let i = 1; i < sequence.length; i++) {
    tmp = 0;
    for (let j = 0; j < i; j++) {
      if (sequence[i] > sequence[j]) tmp = Math.max(tmp, maxLength[j]);
    }
    maxLength[i] = tmp + 1;
  }
  return Math.max(...maxLength);
};

console.log(getLengthOfLongestAscendingSequence(sequence));
