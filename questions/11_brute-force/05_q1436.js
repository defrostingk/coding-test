const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const n = +input;

const getTitleNum = (num) => {
  let cnt = 0;
  let titleNum = 665;
  while (cnt !== num) {
    titleNum++;
    if (String(titleNum).includes("666")) {
      cnt++;
    }
  }
  return titleNum;
};

console.log(getTitleNum(n));
