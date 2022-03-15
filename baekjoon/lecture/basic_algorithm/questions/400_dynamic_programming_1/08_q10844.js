const fs = require("fs");
const digitNum = +fs.readFileSync("../input.txt").toString().trim();
/**
 *      끝 자리가 0으로 끝나면 앞에 1밖에 올 수 없다.
 *      끝 자리가 1-8으로 끝나면 앞에 +1, -1 밖에 올 수 없다.
 *      끝 자리가 9로 끝나면 앞에 8밖에 올 수 없다.
 *  */
const cntStairs = (digitNum) => {
  const MOD = 1000000000;
  const sizeZeroToNine = 10;
  let cnt = Array.from(Array(digitNum + 1), () => new Array(sizeZeroToNine));
  let cntSum = 0;
  cnt[1][0] = 0;
  for (let i = 1; i < sizeZeroToNine; i++) cnt[1][i] = 1;

  for (let i = 2; i <= digitNum; i++) {
    for (let j = 0; j < sizeZeroToNine; j++) {
      if (j === 0) cnt[i][j] = cnt[i - 1][j + 1];
      else if (j === 9) cnt[i][j] = cnt[i - 1][j - 1];
      else cnt[i][j] = cnt[i - 1][j - 1] + cnt[i - 1][j + 1];
      cnt[i][j] %= MOD;
    }
  }

  for (let i = 0; i < 10; i++) cntSum += cnt[digitNum][i];
  return cntSum % MOD;
};

console.log(cntStairs(digitNum));
