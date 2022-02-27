const fs = require("fs");
const width = +fs.readFileSync("../input.txt").toString().trim();

const cntTiles = (width) => {
  let cnt = new Array(width + 1);
  cnt[0] = 1;
  cnt[1] = 1;
  for (let i = 2; i <= width; i++) {
    cnt[i] = (cnt[i - 1] + 2 * cnt[i - 2]) % 10007;
  }
  return cnt[width];
};

console.log(cntTiles(width));
