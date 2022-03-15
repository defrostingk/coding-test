const fs = require("fs");
const integer = +fs.readFileSync("../input.txt").toString().trim();

const cntCalculationNumOfMakingOne = (integer) => {
  let cnt = new Array(integer + 1).fill(0);

  for (let i = 2; i <= integer; i++) {
    cnt[i] = cnt[i - 1] + 1;
    if (i % 2 === 0) cnt[i] = Math.min(cnt[i], cnt[i / 2] + 1);
    if (i % 3 === 0) cnt[i] = Math.min(cnt[i], cnt[i / 3] + 1);
  }

  return cnt[integer];
};

console.log(cntCalculationNumOfMakingOne(integer));
