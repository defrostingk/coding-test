const fs = require("fs");
const digits = +fs.readFileSync("../input.txt").toString().trim();

/**
 *
 * 1:   c[1][0]: 1, c[1][1]: 1, ... , c[1][9]: 1 = 10
 * 2:   c[2][0]: 1, c[2][1]: 2, ... , c[2][9]: 10 = 55
 * 3:   c[3][0]: c[2][0], c[3][1]: c[2][0]+c[2][1], ... , c[3][9]: c[2][0]...c[2][9] = 220
 */
const cntAscendingNum = (digits) => {
  const MOD = 10007;
  let cnt = Array.from(Array(digits + 1), () => new Array(10).fill(0));
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    cnt[1][i] = 1;
  }

  for (let i = 2; i <= digits; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k <= j; k++) {
        sum += cnt[i - 1][k];
      }
      cnt[i][j] = sum % MOD;
      sum = 0;
    }
  }
  for (let i = 0; i < 10; i++) {
    sum += cnt[digits][i];
  }
  return sum % MOD;
};

console.log(cntAscendingNum(digits));
