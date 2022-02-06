const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s+/);

const m = +input.shift();
const n = +input.shift();

const isPrimeNum = (num) => {
  if (num < 2) return false;
  let divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return false;
  return true;
};

let result = "";

for (let i = m; i <= n; i++) {
  result += isPrimeNum(i) ? i + "\n" : "";
}

console.log(result.trim());
