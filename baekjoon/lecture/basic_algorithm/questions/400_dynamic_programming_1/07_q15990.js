const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
const testCases = input.map(Number);
let cnt = Array.from(Array(100001), () => new Array(4));
const MOD = 1000000009;

const setCntExpressSumOfOneTwoThree = () => {
  cnt[1][1] = 1;
  cnt[1][2] = 0;
  cnt[1][3] = 0;
  cnt[2][1] = 0;
  cnt[2][2] = 1;
  cnt[2][3] = 0;
  cnt[3][1] = 1;
  cnt[3][2] = 1;
  cnt[3][3] = 1;
  for (let i = 4; i <= 100000; i++) {
    cnt[i][1] = (cnt[i - 1][2] + cnt[i - 1][3]) % MOD;
    cnt[i][2] = (cnt[i - 2][3] + cnt[i - 2][1]) % MOD;
    cnt[i][3] = (cnt[i - 3][1] + cnt[i - 3][2]) % MOD;
  }
};

const getCntExpressSumOfOneTwoThree = (sum) => {
  return (cnt[sum][1] + cnt[sum][2] + cnt[sum][3]) % MOD;
};

const test = (testCases) => {
  const result = [];
  testCases.forEach((testCase) =>
    result.push(getCntExpressSumOfOneTwoThree(testCase))
  );
  console.log(result.join("\n"));
};

setCntExpressSumOfOneTwoThree();
test(testCases);
