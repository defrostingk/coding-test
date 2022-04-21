const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [coins, sum] = input[0].split(' ').map(Number);
const value = input.slice(1).map(Number);

console.log(getMinCoins(coins, sum, value));

function getMinCoins(coins, sum, value) {
  let cnt = 0;
  let remainder = sum;
  let idx = coins - 1;

  while (remainder > 0) {
    const valueCurrent = value[idx--];
    if (remainder >= valueCurrent) {
      cnt += Math.floor(remainder / valueCurrent);
      remainder %= valueCurrent;
    }
  }

  return cnt;
}
