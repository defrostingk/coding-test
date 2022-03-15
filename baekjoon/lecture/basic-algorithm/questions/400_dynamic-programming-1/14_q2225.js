const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s/);
const sum = +input[0];
const integerNum = +input[1];

/**
 * 1개 사용, 합이 6: =1
 * 2개 사용, 합이 6: 1개 사용, 합이 6 + 1개 사용, 합이 5 + ... + 1개 사용 합이 0
 *                  =7
 * 3개 사용, 합이 6: 2개 사용, 합이 6 + 2개 사용, 합이 5 + ... + 2개 사용 합이 0
 *                  =7+6+...+1
 *                  =28
 * 4개 사용, 합이 6: 3개 사용, 합이 6 + 3개 사용, 합이 5 + ... + 3개 사용 합이 0
 *                  =28+21+15+10+6+3+1
 *                  =84
 */
const cntCasesOfSumInZeroToN = (sum, integerNum) => {
  let cases = Array.from(Array(sum + 1), () => new Array(integerNum + 1));
  const MOD = 1000000000;
  let tmp = 0;
  for (let i = 1; i <= sum; i++) {
    cases[i][1] = 1;
  }
  for (let i = 1; i <= integerNum; i++) {
    cases[0][i] = 1;
  }
  for (let i = 1; i <= sum; i++) {
    for (let j = 2; j <= integerNum; j++) {
      tmp = 0;
      for (let k = 0; k <= i; k++) {
        tmp += cases[k][j - 1];
      }
      cases[i][j] = tmp % MOD;
    }
  }

  return cases[sum][integerNum];
};

console.log(cntCasesOfSumInZeroToN(sum, integerNum));
