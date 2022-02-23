const fs = require("fs");
const [m, n] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const isPrime = (num) => {
  if (num < 2) return 0;
  const divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return 0;
  return 1;
};

const getPrimeBetween = (minInt, maxInt) => {
  let prime = [];
  for (let i = minInt; i <= maxInt; i++) {
    if (isPrime(i)) prime.push(i);
  }
  return prime;
};

console.log(getPrimeBetween(m, n).join("\n"));
