const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const data = input[1].split(" ").map((x) => +x);
let result = 0;
const isPrimNum = (num) => {
  let devider = 2;
  while (devider < num) {
    if (num % devider === 0) break;
    devider++;
  }
  return devider === num ? true : false;
};

data.forEach((num) => (result += isPrimNum(num) ? 1 : 0));

console.log(result);
