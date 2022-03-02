const fs = require("fs");
const { promisify } = require("util");
const height = +fs.readFileSync("../input.txt").toString().trim();

/**
 * 2*1배열에 배치: 1+2 = 3
 * 2*2배열에 배치: 1+4+2 = 7
 * 2*3배열에 배치: 1+6+3+3+1+1+2 = 17
 * 2*4배열에 배치: ...           = 41
 *
 * c[n] = 2*c[n-1]2 + c[n-2]
 */
const getCntArrangeLions = (height) => {
  let cnt = new Array(height + 1);
  const MOD = 9901;
  cnt[1] = 3;
  cnt[2] = 7;
  for (let i = 3; i <= height; i++) {
    cnt[i] = (2 * cnt[i - 1] + cnt[i - 2]) % MOD;
  }
  return cnt[height];
};

const printCntArrangeLions = () => {
  console.log(getCntArrangeLions(height));
};

printCntArrangeLions();
