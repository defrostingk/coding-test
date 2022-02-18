const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const getCutPieces = (bar) => {
  let pieces = 0;
  let stack = [];

  for (let i = 0; i < bar.length; i++) {
    if (bar[i] === "(") {
      stack.push(bar[i]);
    } else {
      // 레이저를 만난 경우
      if (bar[i - 1] === "(") {
        stack.pop();
        // 레이저 전까지의 막대 개수를 더한다.
        pieces += stack.length;
      } else {
        // 막대가 끝난 경우
        stack.pop();
        // 막대가 끝이 나면 조각 하나가 더 생기는 것이므로 조각 하나를 더한다.
        pieces++;
      }
    }
  }

  return pieces;
};

console.log(getCutPieces(input));
