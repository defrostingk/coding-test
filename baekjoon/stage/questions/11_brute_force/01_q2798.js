const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(/\s+/)
  .map((x) => +x);

const cards = input
  .shift()
  .split(/\s+/)
  .map((x) => +x);

const blackjack = (n, m, cards) => {
  let a, b, c;
  let sum;
  let sumMax = 0;
  for (let i = 0; i < n; i++) {
    a = cards[i];
    for (let j = i + 1; j < n; j++) {
      b = cards[j];
      for (let k = j + 1; k < n; k++) {
        c = cards[k];
        sum = a + b + c;
        if (m - sum >= 0 && m - sum < m - sumMax) sumMax = sum;
      }
    }
  }
  return sumMax;
};

console.log(blackjack(n, m, cards));
