const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().toUpperCase();

const word = input.split("").map((x) => x.charCodeAt());
let alphaCnt = [];
let mostFreqCnt = 0;
let isRep = -1;
let alphaMostFreq = 0;

for (let i = 0; i < 26; i++) alphaCnt.push(0);

word.forEach((alpha) => alphaCnt[alpha - 65]++);

mostFreqCnt = Math.max.apply(null, alphaCnt);

alphaCnt.forEach((cnt, idx) => {
  if (mostFreqCnt === cnt) {
    isRep += 1;
    alphaMostFreq = idx + 65;
  }
});

alphaMostFreq = isRep ? 63 : alphaMostFreq;

console.log(String.fromCharCode(alphaMostFreq));
