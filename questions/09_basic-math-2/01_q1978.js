const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const data = input[1].split(" ").map((x) => +x);
let result = 0;
const isPrimNum = (num) => {
  let divider = 2;
  while (divider < num) {
    if (num % divider === 0) break;
    divider++;
  }
  return divider === num ? true : false;
};

data.forEach((num) => (result += isPrimNum(num) ? 1 : 0));

console.log(result);
