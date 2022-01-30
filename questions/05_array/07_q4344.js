const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testCaseNum = +input[0];
const studentNum = input.slice(1, testCaseNum + 1).map((x) => +x.split(" ")[0]);
const studentScores = input.slice(1, testCaseNum + 1).map((x) =>
  x
    .split(" ")
    .slice(1)
    .map((x) => +x)
);

studentScores.forEach((testCase, index) => {
  let avg = testCase.reduce((acc, cur) => (acc += cur), 0);
  avg /= studentNum[index];

  let cnt = testCase.reduce((acc, cur) => (acc += cur > avg ? 1 : 0), 0);
  console.log(((cnt / studentNum[index]) * 100).toFixed(3) + "%");
});
