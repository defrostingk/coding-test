const fs = require("fs");
const input = +fs.readFileSync("../input.txt").toString().trim();

const isHansu = (num) => {
  if (num < 100) {
    return true;
  } else if (num > 100) {
    let digit = String(num)
      .split("")
      .map((x) => +x);
    let diff = digit[0] - digit[1];
    let equalDiff = true;
    digit.forEach((num, idx) => {
      if (idx < digit.length - 1)
        if (diff !== num - digit[idx + 1]) equalDiff = false;
    });
    return equalDiff ? true : false;
  }
};

let cnt = 0;

for (let i = 1; i <= input; i++) {
  cnt += isHansu(i) ? 1 : 0;
}

console.log(cnt);
