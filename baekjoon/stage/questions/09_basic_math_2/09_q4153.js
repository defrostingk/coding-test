const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testCases = input.map((x) => x.split(/\s+/).map((x) => +x)).slice(0, -1);

const isRightTriangle = (triangleArr) => {
  const longestSide = Math.max.apply(null, triangleArr);
  const otherside = triangleArr.filter((x) => x != longestSide);
  if (
    otherside.reduce((acc, cur) => (acc += cur * cur), 0) ===
    longestSide * longestSide
  )
    return true;
  return false;
};

let result = "";

testCases.forEach(
  (testCase) => (result += isRightTriangle(testCase) ? "right\n" : "wrong\n")
);

console.log(result.trim());
