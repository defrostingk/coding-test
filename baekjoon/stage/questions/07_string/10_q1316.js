const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input[0];
const words = input.slice(1, n + 1);

let pos, foundPos;
let foundCnt;
let groupWord;
let groupWordCnt = 0;

words.forEach((word) => {
  let alphas = word.split("");
  groupWord = true;
  alphas.forEach((alpha) => {
    pos = 0;
    foundCnt = 0;
    while (pos < word.length) {
      foundPos = word.indexOf(alpha, pos);
      if (foundPos === -1) break;
      foundCnt++;
      if (foundCnt > 1) {
        groupWord = pos === foundPos ? groupWord : false;
      }
      pos = foundPos + 1;
    }
  });
  groupWordCnt += groupWord ? 1 : 0;
});

console.log(groupWordCnt);
