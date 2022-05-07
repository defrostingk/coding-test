const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testSize = +input.shift();
const testCases = input.map((testCase) => testCase.split(/\s/).map(Number));

test();

function test() {
  let result = "";
  testCases.forEach(
    (testCase) =>
      (result += `${getCainYear(
        testCase[0],
        testCase[1],
        testCase[2],
        testCase[3]
      )}\n`)
  );
  console.log(result.trim());
}

function getCainYear(m, n, x, y) {
  const maxYear = getLCM(m, n);
  let year = 0;
  let cycle = 0;

  if (m === x && n === y) {
    return maxYear;
  }

  if (x === y && m >= x && n >= y) {
    return x;
  }

  while (true) {
    // x값에 대해 가능한 year만 확인
    year = m * cycle + x;
    // 마지막 해를 초과한 경우
    if (year > maxYear) {
      return -1;
    }
    // y가 최댓값(n) 미만인 경우
    if (year % n === y) {
      return year;
    }
    // y가 최댓값(n)인 경우
    if (n === y && year % n === 0) {
      return year;
    }
    cycle++;
  }
}

function getLCM(naturalA, naturalB) {
  return (naturalA * naturalB) / getGCD(naturalA, naturalB);
}

function getGCD(naturalA, naturalB) {
  return naturalB ? getGCD(naturalB, naturalA % naturalB) : naturalA;
}
