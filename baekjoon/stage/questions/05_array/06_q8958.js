const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input[0];
const quizResult = input.slice(1, n + 1);
let score = 0;
let oCnt = 0;

quizResult.forEach((testCase) => {
  testCase.split("").forEach((ox, index) => {
    oCnt += ox === "O" ? 1 : 0;
    if (ox === "X" || index === testCase.length - 1) {
      score += (oCnt * (oCnt + 1)) / 2;
      oCnt = 0;
    }
  });
  console.log(score);
  score = 0;
});
