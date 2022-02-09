const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

let hanoiProcessing = "";
let cnt = 0;

const getHanoiNum = (num, from, other, to) => {
  cnt++;
  if (num === 1) return (hanoiProcessing += `${from} ${to}\n`); // 맨 위 원판 옮기기
  getHanoiNum(num - 1, from, to, other); // 시작 고리->다른 고리에 쌓기
  hanoiProcessing += `${from} ${to}\n`; // 맨 아래 원판 옮기기
  getHanoiNum(num - 1, other, from, to); // 다른 고리->도착 고리에 쌓기
};

getHanoiNum(n, "1", "2", "3");
console.log(cnt);
console.log(hanoiProcessing.trim());
