const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const getAlphaIdx = (word) => {
  const alphaIdx = new Array(26).fill(-1);
  for (let i = 0; i < word.length; i++) {
    if (alphaIdx[word[i].charCodeAt() - 97] < 0)
      alphaIdx[word[i].charCodeAt() - 97] = i;
  }
  return alphaIdx;
};

console.log(getAlphaIdx(input).join(" "));
