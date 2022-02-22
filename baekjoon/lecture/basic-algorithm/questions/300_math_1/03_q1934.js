const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const testCases = input.map((x) => x.split(/\s+/).map((x) => +x));

const getGCD = (intA, intB) => {
  return intB ? getGCD(intB, intA % intB) : intA;
};

const getLCM = (intA, intB) => {
  return (intA * intB) / getGCD(intA, intB);
};

const getLCMInTestCase = (testCases) => {
  let LCM = "";
  testCases.forEach((testCase) => {
    LCM += getLCM(testCase[0], testCase[1]) + "\n";
  });
  return LCM.trim();
};

console.log(getLCMInTestCase(testCases));
