const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
const testCases = input.map(Number);

// c[n] = c[n-1] + c[n-2] + c[n-3]
const cntExpressSumOfOneTwoThree = (sum) => {
  let cnt = new Array(sum + 1);
  cnt[0] = 1;
  cnt[1] = 1;
  cnt[2] = 2;
  for (let i = 3; i <= sum; i++) {
    cnt[i] = cnt[i - 1] + cnt[i - 2] + cnt[i - 3];
  }

  return cnt[sum];
};

const test = (testCases) => {
  const result = [];
  testCases.forEach((testCase) =>
    result.push(cntExpressSumOfOneTwoThree(testCase))
  );
  console.log(result.join("\n"));
};

test(testCases);
