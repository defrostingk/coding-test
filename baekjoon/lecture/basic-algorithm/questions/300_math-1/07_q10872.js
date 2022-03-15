const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

const getFatorialOf = (num) => {
  if (num === 0) return 1;
  return num * getFatorialOf(num - 1);
};

console.log(getFatorialOf(n));
