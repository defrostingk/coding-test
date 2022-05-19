const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const board = input.slice(1).map((row) => row.split(''));
  const [COIN, EMPTY, WALL] = ['o', '.', '#'];
  const coins = [];
  class Coin {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (board[j][i] === COIN) {
        const coin = new Coin(i, j);
        coins.push(coin);
      }
    }
  }

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const coinA = coins[0];
  const coinB = coins[1];
  let min = 11;

  dfs(0, coinA, coinB);

  if (min === 11) console.log(-1);
  else console.log(min);

  function dfs(cnt, coinA, coinB) {
    if (cnt >= min) return;
    if (cnt >= 10) return;
    for (let i = 0; i < dx.length; i++) {
      const nextA = new Coin(coinA.x + dx[i], coinA.y + dy[i]);
      const nextB = new Coin(coinB.x + dx[i], coinB.y + dy[i]);
      const isAfell = isfell(nextA.x, nextA.y);
      const isBfell = isfell(nextB.x, nextB.y);
      if (isAfell && isBfell) continue;
      if ((!isAfell && isBfell) || (isAfell && !isBfell)) {
        min = Math.min(cnt + 1, min);
        continue;
      }
      if (board[nextA.y][nextA.x] === WALL) {
        nextA.y = coinA.y;
        nextA.x = coinA.x;
      }
      if (board[nextB.y][nextB.x] === WALL) {
        nextB.y = coinB.y;
        nextB.x = coinB.x;
      }
      dfs(cnt + 1, nextA, nextB);
    }
  }

  function isfell(x, y) {
    return x < 0 || y < 0 || x >= width || y >= height;
  }
})(input);
