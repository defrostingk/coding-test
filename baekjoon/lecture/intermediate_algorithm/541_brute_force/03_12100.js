const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const oriBoard = input.slice(1).map((row) => row.split(' ').map(Number));
  const [UP, DOWN, LEFT, RIGHT] = [0, 1, 2, 3];

  let maxBlock = 0;
  dfs(oriBoard, 0);

  console.log(maxBlock);

  function dfs(board, cnt) {
    if (cnt >= 5) {
      maxBlock = Math.max(maxBlock, Math.max(...board.flat()));
      return;
    }
    for (let dir = 0; dir < 4; dir++) {
      const nextBoard = Array.from(Array(n), () => new Array(n));
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          nextBoard[y][x] = board[y][x];
        }
      }
      moveBlocks(nextBoard, dir);
      dfs(nextBoard, cnt + 1);
    }
  }
  function moveBlocks(board, dir) {
    const queue = [];
    switch (dir) {
      case UP:
        for (let x = 0; x < n; x++) {
          for (let y = 0; y < n; y++) {
            if (board[y][x]) {
              queue.push(board[y][x]);
              board[y][x] = 0;
            }
          }
          let idx = 0;
          while (queue.length) {
            const tmp = queue.shift();
            if (!board[idx][x]) board[idx][x] = tmp;
            else if (board[idx][x] === tmp) board[idx++][x] *= 2;
            else board[++idx][x] = tmp;
          }
        }
        break;
      case DOWN:
        for (let x = 0; x < n; x++) {
          for (let y = n - 1; y >= 0; y--) {
            if (board[y][x]) {
              queue.push(board[y][x]);
              board[y][x] = 0;
            }
          }
          let idx = n - 1;
          while (queue.length) {
            const tmp = queue.shift();
            if (!board[idx][x]) board[idx][x] = tmp;
            else if (board[idx][x] === tmp) board[idx--][x] *= 2;
            else board[--idx][x] = tmp;
          }
        }
        break;
      case LEFT:
        for (let y = 0; y < n; y++) {
          for (let x = 0; x < n; x++) {
            if (board[y][x]) {
              queue.push(board[y][x]);
              board[y][x] = 0;
            }
          }
          let idx = 0;
          while (queue.length) {
            const tmp = queue.shift();
            if (!board[y][idx]) board[y][idx] = tmp;
            else if (board[y][idx] === tmp) board[y][idx++] *= 2;
            else board[y][++idx] = tmp;
          }
        }
        break;
      case RIGHT:
        for (let y = 0; y < n; y++) {
          for (let x = n - 1; x >= 0; x--) {
            if (board[y][x]) {
              queue.push(board[y][x]);
              board[y][x] = 0;
            }
          }
          let idx = n - 1;
          while (queue.length) {
            const tmp = queue.shift();
            if (!board[y][idx]) board[y][idx] = tmp;
            else if (board[y][idx] === tmp) board[y][idx--] *= 2;
            else board[y][--idx] = tmp;
          }
        }
        break;
    }
  }
})(input);
