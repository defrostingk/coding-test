const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testCaseNum = +input[0];
const testCaseRep = input
  .slice(1, testCaseNum + 1)
  .map((x) => +x.split(" ")[0]);
const testCase = input
  .slice(1, testCaseNum + 1)
  .map((x) => x.split(" ")[1].split(""));

let result = "";

for (let i = 0; i < testCaseNum; i++) {
  testCase[i].forEach((testString) => {
    for (let j = 0; j < testCaseRep[i]; j++) result += testString;
  });
  result += "\n";
}

console.log(result.trimEnd());
