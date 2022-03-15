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
  let curTop, curBottom, past;
  score[1][0] = 0;
  score[1][1] = top[0];
  score[1][2] = bottom[0];

  for (let i = 2; i <= width; i++) {
    curTop = top[i - 1];
    curBottom = bottom[i - 1];
    past = score[i - 1];

    score[i][0] = Math.max(...past);
    score[i][1] = Math.max(past[2] + curTop, past[0] + curTop);
    score[i][2] = Math.max(past[1] + curBottom, past[0] + curBottom);
  }

  return Math.max(score[width][0], score[width][1], score[width][2]);
};

const test = (testSuite) => {
  let result = [];
  testSuite.forEach((testCase) => result.push(getMaxScore(testCase)));
  console.log(result.join("\n"));
};

test(testSuite);
