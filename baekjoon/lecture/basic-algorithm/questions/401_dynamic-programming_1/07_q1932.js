const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const stage = +input.shift();
const triangle = input.map((v) => v.split(/\s/).map(Number));

/**
 * s[n][i] = if i === 0: s[n-1][i]
 *           if i === n-1: s[n-1][i-1]
 *           else: Math.max(s[n-1][i-1], s[n-1][i])
 *
 *           + tri[n][i]
 */
const getMaxSum = (triangle) => {
  triangle.unshift(0);
  const { length } = triangle;
  let sum = new Array(length);

  for (let i = 1; i < length; i++) {
    sum[i] = new Array(i);
  }
  sum[1][0] = triangle[1][0];
  for (let i = 2; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (j === 0) {
        sum[i][j] = sum[i - 1][j];
      } else if (j === i - 1) {
        sum[i][j] = sum[i - 1][j - 1];
      } else {
        sum[i][j] = Math.max(sum[i - 1][j - 1], sum[i - 1][j]);
      }
      sum[i][j] += triangle[i][j];
    }
  }

  return Math.max(...sum[length - 1]);
};

const printMaxSum = () => {
  console.log(getMaxSum(triangle));
};

printMaxSum();
