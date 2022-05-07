const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s/);
const sequence = input.slice(1).map(Number);

const getContinuousSumMaxOf = (sequence) => {
  const { length } = sequence;
  let continuousSum = new Array(length);
  continuousSum[0] = sequence[0];
  for (let i = 1; i < length; i++) {
    if (continuousSum[i - 1] + sequence[i] < sequence[i]) {
      continuousSum[i] = sequence[i];
    } else {
      continuousSum[i] = continuousSum[i - 1] + sequence[i];
    }
  }

  return Math.max(...continuousSum);
};

const printContinuousSumMaxOf = (sequence) => {
  console.log(getContinuousSumMaxOf(sequence));
};

printContinuousSumMaxOf(sequence);
