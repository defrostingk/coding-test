const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
const size = input.shift();
const sequence = input;

function getMaxContinuousSum(sequence) {
  const { length } = sequence;
  let sum = Array.from(Array(2), () => new Array(length));

  sum[0][0] = sum[1][0] = sequence[0];
  for (let i = 1; i < length; i++) {
    // 아무것도 제거하지 않은 경우
    sum[0][i] = Math.max(sum[0][i - 1] + sequence[i], sequence[i]);
    // 이번 항을 제거한 경우, 이전에 제거하고 이어온 경우
    sum[1][i] = Math.max(sum[0][i - 1], sum[1][i - 1] + sequence[i]);
  }

  return Math.max(...sum[0], ...sum[1]);
}

function printMaxContinuousSum() {
  console.log(getMaxContinuousSum(sequence));
}

printMaxContinuousSum();
