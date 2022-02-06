const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const isPrimeNum = (num) => {
  if (num < 2) return false;
  let divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return false;
  return true;
};

let primeNumArr = [];

const solution = (m, n) => {
  for (let i = m; i <= n; i++) if (isPrimeNum(i)) primeNumArr.push(i);
  if (primeNumArr.length) {
    let sum = primeNumArr.reduce((acc, cur) => (acc += cur), 0);
    let min = Math.min.apply(null, primeNumArr);
    console.log(`${sum}\n${min}`);
  } else {
    console.log(-1);
  }
};

solution(+input.shift(), +input.shift());
