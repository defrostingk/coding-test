const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
const testCase = input.map((x) => x.split(/\s+/).map((x) => +x));
testCase.map((x) => x.shift());

const getGCD = (intA, intB) => {
  return intB ? getGCD(intB, intA % intB) : intA;
};

const getPairOfArr = (arr) => {
  const pairs = [];
  let pair = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      pair.push(arr[i]);
      pair.push(arr[j]);
      pairs.push(pair);
      pair = [];
    }
  }
  return pairs;
};

const getSumOfGCD = (arr) => {
  const pairs = getPairOfArr(arr);
  const GCD = [];
  pairs.forEach((pair) => GCD.push(getGCD(pair[0], pair[1])));
  return GCD.reduce((acc, cur) => (acc += cur), 0);
};

const getTestResult = (testCase) => {
  const stack = [];
  testCase.forEach((num) => {
    stack.push(getSumOfGCD(num));
  });
  return stack.join("\n");
};

console.log(getTestResult(testCase));
