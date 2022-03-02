const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const testSuiteNum = +input.shift();
let testSuite = [];
let tmp = [];

for (let i = 0; i < testSuiteNum; i++) {
  tmp.push(+input[i * 3]);
  tmp.push(input[i * 3 + 1].split(/\s/).map(Number));
  tmp.push(input[i * 3 + 2].split(/\s/).map(Number));
  testSuite.push(tmp);
  tmp = [];
}

const getMaxScore = (testCase) => {
  const width = testCase.shift();
  const top = testCase.shift();
  const bottom = testCase.shift();
  let score = Array.from(Array(width + 1), () => new Array(3));
  let tmp;
  score[1][0] = 0;
  score[1][1] = top[0];
  score[1][2] = bottom[0];
  for (let i = 2; i <= width; i++) {
    score[i][0] = Math.max(...score[i - 1]);
    tmp = Math.max(score[i - 1][2] + top[i - 1], score[i - 1][0] + top[i - 1]);
    score[i][1] = tmp;
    tmp = Math.max(
      score[i - 1][1] + bottom[i - 1],
      score[i - 1][0] + bottom[i - 1]
    );
    score[i][2] = tmp;
  }
  return Math.max(score[width][0], score[width][1], score[width][2]);
};

const test = (testSuite) => {
  let result = [];
  testSuite.forEach((testCase) => result.push(getMaxScore(testCase)));
  console.log(result.join("\n"));
};

test(testSuite);
