const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const sequenceLength = input.shift();
const sequence = input;

/**
 * maxSum[i]에 sequence[i] 로 끝나는 수열의 합을 저장
 * i번째 원소가 어떤 j번째 원소보다 크면
 * j번째 원소로 끝나는 수열의 합 중 가장 큰 값을 기억하고
 * maxSum[i]에 기억했던 큰 값과 i번째 원소를 더하여 저장
 */
const getMaxSumOfPartialAscendingSequence = (sequence) => {
  const { length } = sequence;
  let maxSum = new Array(length);
  let max;
  for (let i = 0; i < length; i++) {
    maxSum[i] = sequence[i];
  }

  for (let i = 0; i < length; i++) {
    max = 0;
    for (let j = 0; j < i; j++) {
      if (sequence[i] > sequence[j]) {
        max = Math.max(max, maxSum[j]);
      }
      maxSum[i] = max + sequence[i];
    }
  }

  return Math.max(...maxSum);
};

const printMaxSumOfPartialAscendingSequence = () => {
  console.log(getMaxSumOfPartialAscendingSequence(sequence));
};

printMaxSumOfPartialAscendingSequence();
