const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const numbers = input
  .shift()
  .split(/\s+/)
  .map((x) => +x);

const isPrime = (num) => {
  if (num < 2) return 0;
  let divider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= divider; i++) if (num % i === 0) return 0;
  return 1;
};

const howManyPrimeIn = (numbers) => {
  let primeNum = 0;
  numbers.forEach((num) => {
    if (isPrime(num)) primeNum++;
  });
  return primeNum;
};

console.log(howManyPrimeIn(numbers));
