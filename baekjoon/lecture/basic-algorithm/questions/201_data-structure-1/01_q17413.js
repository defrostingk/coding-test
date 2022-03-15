const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const getReversedWords = (words) => {
  let stack = [];
  let idx = 0;
  let result = "";
  while (idx < words.length) {
    // '<' 만났을 때 '>' 까지 pass
    // 공백 만날때까지 push 후 pop
    if (words[idx] === "<") {
      do {
        result += words[idx];
      } while (words[idx++] !== ">");
    }
    while (words[idx] !== " " && idx < words.length) {
      if (words[idx] === "<") break;
      stack.push(words[idx++]);
    }
    while (stack.length) {
      result += stack.pop();
    }
    if (words[idx] === " ") result += words[idx++];
  }
  return result;
};

console.log(getReversedWords(input));
