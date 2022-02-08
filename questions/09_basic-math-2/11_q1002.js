const { deepStrictEqual } = require("assert");
const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testCaseNum = +input.shift();
const testCases = input.map((x) => x.split(/\s+/).map((x) => +x));

const getLocationsNum = (testCase) => {
  const x1 = testCase.shift();
  const y1 = testCase.shift();
  const r1 = testCase.shift();
  const x2 = testCase.shift();
  const y2 = testCase.shift();
  const r2 = testCase.shift();

  const distance1To2 = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

  // 같은 점 dot1, dot2를 중심으로 하고 r1, r2를 가지는 원
  if (distance1To2 === 0) {
    // 같은 점을 중심으로 하는 원
    if (r1 === r2) return -1;
    else if (r1 !== r2) return 0;
  } else if (distance1To2 < r1 || distance1To2 < r2) {
    // 서로 다른 dot1, dot2 를 중심으로 하고 r1, r2 를 가지는 원
    // 중심이 원의 내부에 있음.
    if (distance1To2 > Math.abs(r1 - r2)) return 2;
    else if (distance1To2 === Math.abs(r1 - r2)) return 1;
    else return 0;
  } else {
    // 중심이 원의 외부에 있음.
    // i) 두 원이 서로 다른 두 점에서 만날 때 2
    // distance < r1 + r2
    if (distance1To2 < r1 + r2) return 2;
    // ii) 두 원이 한 점에서 만날 때 1
    // distance = r1 + r2
    else if (distance1To2 === r1 + r2) return 1;
    // iii) 두 원이 만나지 않을 때 0
    // distance > r1 + r2
    else return 0;
  }
};

let result = "";
testCases.forEach((testCase) => (result += getLocationsNum(testCase) + "\n"));

console.log(result.trim());
