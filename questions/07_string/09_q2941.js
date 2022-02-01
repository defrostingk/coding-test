const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const croatia = {
  č: "c=",
  ć: "c-",
  dž: "dz=",
  đ: "d-",
  lj: "lj",
  nj: "nj",
  š: "s=",
  ž: "z=",
};

let cnt = input.length;
let pos = 0;
let foundPos = 0;
let dzCnt = 0;

Object.values(croatia).forEach((croatiaAlpha, idx) => {
  pos = 0;
  while (pos < input.length) {
    foundPos = input.indexOf(croatiaAlpha, pos);
    if (foundPos === -1) break;
    pos = foundPos + 1;
    cnt--;
    if (idx === 2) {
      cnt--;
      dzCnt++;
    } else if (idx === 7) {
      if (dzCnt) {
        cnt++;
        dzCnt--;
      }
    }
  }
});

console.log(cnt);
