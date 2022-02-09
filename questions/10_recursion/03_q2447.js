const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

const printStars = (num) => {
  if (num === 3) return ["***", "* *", "***"];
  const preStars = printStars(num / 3);
  let result = [];
  preStars.forEach((line) => result.push(line.repeat(3)));
  preStars.forEach((line) => result.push(line + " ".repeat(num / 3) + line));
  preStars.forEach((line) => result.push(line.repeat(3)));
  return result;
};

// n = 27 의 경우,
// printStars(27)->printStars(9)->printStars(3) 순서로 호출
// n = 3의 사각형 생성 후, 그것을 이용해 n = 9의 사각형 생성,
// 그것을 이용해 n = 27의 사각형 생성
result = printStars(n).join("\n");
console.log(result);
