const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const testCaseNum = input.shift();
const testCase = input.slice(0, testCaseNum);

const isPrimeNum = (num) => {
  if (num < 2) return false;
  const divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return false;
  return true;
};

const printGoldbachPartition = (evenNum) => {
  let partitionA = evenNum / 2;
  let partitionB;

  do {
    partitionB = evenNum - partitionA;
  } while (!(isPrimeNum(partitionA--) && isPrimeNum(partitionB)));

  return `${++partitionA} ${partitionB}`;
};

let result = "";

testCase.forEach((num) => (result += printGoldbachPartition(num) + "\n"));
console.log(result.trim());
