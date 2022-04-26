const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const size = +input[0];
  const coins = input
    .slice(1)
    .map((column) =>
      column.split('').map((coin) => (coin = coin === 'H' ? 0 : 1))
    );
  let min = 400;

  // bit masking으로 정해진 열의 coins를 toggle하고
  // 동시에 tail과 head를 센다.
  // 이때 tail이 더 많다면 행의 coins를 toggle한 것으로 치고 head의 수를 tail의 수로 본다.
  for (let k = 0; k < 1 << size; k++) {
    let coinsCp = copyCoins(coins);
    let cnt = 0;
    for (let y = 0; y < size; y++) {
      let cntTail = 0;
      let cntHead = 0;
      for (let x = 0; x < size; x++) {
        let reverse = 1 << x;
        if (reverse & k) toggleCoin(x, y, coinsCp);
        coinsCp[y][x] ? cntTail++ : cntHead++;
      }
      cnt += Math.min(cntHead, cntTail);
    }
    min = Math.min(min, cnt);
  }

  console.log(min);

  function toggleCoin(x, y, coinsArr) {
    coinsArr[y][x] = 1 - coinsArr[y][x];
  }

  function copyCoins(coins) {
    const cp = Array.from(Array(size), () => new Array(size));
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        cp[y][x] = coins[y][x];
      }
    }
    return cp;
  }
}
