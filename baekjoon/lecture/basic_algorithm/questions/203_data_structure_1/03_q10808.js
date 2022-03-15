const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const getAlphaCnt = (word) => {
  const ALPHABET_NUMBER = 26;
  const alphaCnt = new Array(ALPHABET_NUMBER).fill(0);
  for (let i = 0; i < word.length; i++) {
    alphaCnt[word[i].charCodeAt() - 97]++;
  }
  return alphaCnt;
};

console.log(getAlphaCnt(input).join(" "));
