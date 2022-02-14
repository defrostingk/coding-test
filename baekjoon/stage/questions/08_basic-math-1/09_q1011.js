const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testCaseNum = input.shift();
const testCase = input.slice(0, testCaseNum).map((x) => x.split(/\s+/));

let result = "";

const operationNum = (x, y) => {
  let distance = y - x;
  let cnt;
  let upperStage, lowerStage;

  if (Math.sqrt(distance) % 1 === 0) cnt = 2 * Math.sqrt(distance) - 1;
  else {
    upperStage = Math.pow(Math.ceil(Math.sqrt(distance)), 2);
    lowerStage = Math.pow(Math.ceil(Math.sqrt(distance)) - 1, 2);

    if ((upperStage + lowerStage) / 2 < distance)
      cnt = 2 * Math.sqrt(upperStage) - 1;
    else cnt = 2 * Math.sqrt(lowerStage);
  }

  return cnt;
};

testCase.forEach((xy) => (result += operationNum(xy[0], xy[1]) + "\n"));

console.log(result.trim());
