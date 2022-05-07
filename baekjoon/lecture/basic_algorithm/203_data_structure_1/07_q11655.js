const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString();

const getROT13 = (string) => {
  const UPPERCASE_END_IDX = 90;
  const LOWERCASE_END_IDX = 122;
  let encoding = "";
  let tmpIdx;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[A-Z]/)) {
      tmpIdx = string[i].charCodeAt() + 13;
      if (tmpIdx > UPPERCASE_END_IDX) tmpIdx -= 26;
      encoding += String.fromCharCode(tmpIdx);
    } else if (string[i].match(/[a-z]/)) {
      tmpIdx = string[i].charCodeAt() + 13;
      if (tmpIdx > LOWERCASE_END_IDX) tmpIdx -= 26;
      encoding += String.fromCharCode(tmpIdx);
    } else encoding += string[i];
  }

  return encoding;
};

console.log(getROT13(input));
