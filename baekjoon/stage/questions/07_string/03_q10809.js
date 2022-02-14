const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("")
  .map((x) => x.charCodeAt());

let alphaList = [];
let result = "";

for (let i = 0; i < 26; i++) alphaList.push(-1);

input.forEach((word, wordIndex) => {
  alphaList.forEach((alpha, alphaIndex) => {
    if (alpha === -1)
      alphaList[alphaIndex] =
        word === alphaIndex + 97 ? wordIndex : alphaList[alphaIndex];
  });
});

alphaList.forEach((alpha) => (result += String(alpha) + " "));

console.log(result.trim());
