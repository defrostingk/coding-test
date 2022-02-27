const fs = require("fs");
const digitNum = +fs.readFileSync("../input.txt").toString().trim();

/**
 * 끝 자리가 1인 경우, 끝 자리가 0인 경우만 올 수 있다.
 * 끝 자리가 0인 경우, 끝 자리가 1인 경우와 0인 경우 모두 올 수 있다.
 */
const cntPinary = (digitNum) => {
  let cnt = Array.from(Array(digitNum + 1), () => new Array(2));
  cnt[1][0] = 0;
  cnt[1][1] = 1;
  for (let i = 2; i <= digitNum; i++) {
    cnt[i][0] = BigInt(cnt[i - 1][0] + cnt[i - 1][1]);
    cnt[i][1] = BigInt(cnt[i - 1][0]);
  }
  return (cnt[digitNum][0] + cnt[digitNum][1]).toString();
};

console.log(cntPinary(digitNum));
