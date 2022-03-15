const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s/);
const testSuite = input.slice(1).map(Number);
let cntExpress = new Array(1000000 + 1);

/**
 * c[n] =  c[n-1] + c[n-2] + c[n-3]
 * c[n]은   c[n-1]의 경우에 각각 1을 더한 경우,
 *          c[n-2]의 경우에 각각 2를 더한 경우,
 *          c[n-3]의 경우에 각각 3을 더한 경우의 합이다.
 *
 * 1 2 4 7 13 24 44 81 ...
 */
const cntExpressSumOfOneTwoThree = () => {
  const MOD = 1000000009;
  let tmp;

  cntExpress[1] = 1;
  cntExpress[2] = 2;
  cntExpress[3] = 4;

  for (let i = 4; i <= 1000000; i++) {
    tmp = cntExpress[i - 1] + cntExpress[i - 2] + cntExpress[i - 3];
    cntExpress[i] = tmp % MOD;
  }
};

const getExpressSumOfOneTwoThree = (sum) => {
  return cntExpress[sum];
};

const printResult = () => {
  result = [];
  cntExpressSumOfOneTwoThree();
  testSuite.forEach((testCase) =>
    result.push(getExpressSumOfOneTwoThree(testCase))
  );
  console.log(result.join("\n"));
};

printResult();
