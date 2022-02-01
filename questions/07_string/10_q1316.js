const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input[0];
const words = input.slice(1, n + 1);
let alphas;
let pos;
let oldFoundPos;
let newFoundPos;
let foundCnt;
let groupWord;
let groupWordCnt = 0;

words.forEach((word) => {
  alphas = word.split("");
  groupWord = true;
  alphas.forEach((alpha) => {
    pos = 0;
    foundCnt = 0;
    while (pos < word.length) {
      newFoundPos = word.indexOf(alpha, pos);
      if (newFoundPos === -1) break;
      foundCnt++;
      if (foundCnt > 1) {
        groupWord = newFoundPos - oldFoundPos === 1 ? true : false;
        if (!groupWord) break;
      }
      pos = newFoundPos + 1;
      oldFoundPos = newFoundPos;
    }
  });
  groupWordCnt += groupWord ? 1 : 0;
});

console.log(groupWordCnt);
