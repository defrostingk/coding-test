const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const sudoku = input.map((row) => row.split(' ').map(Number));
  const SIZE = 9;
  const EMPTY = 0;

  const empty = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (sudoku[y][x] === EMPTY) empty.push({ x, y });
    }
  }

  let found = 0;
  dfs(0);

  function dfs(cnt) {
    if (found) return;
    if (cnt >= empty.length) {
      sudoku.forEach((row) => console.log(row.join(' ')));
      found = 1;
      return;
    }

    const emptyX = empty[cnt].x;
    const emptyY = empty[cnt].y;

    for (let i = 1; i <= SIZE; i++) {
      if (isAvailable(emptyX, emptyY, i)) {
        sudoku[emptyY][emptyX] = i;
        dfs(cnt + 1);
        sudoku[emptyY][emptyX] = 0;
      }
    }
  }

  function isAvailable(x, y, value) {
    for (let j = 0; j < SIZE; j++) {
      if (y !== j && sudoku[j][x] === value) return false;
    }
    for (let i = 0; i < SIZE; i++) {
      if (x !== i && sudoku[y][i] === value) return false;
    }

    const xStart = Math.floor(x / 3) * 3;
    const yStart = Math.floor(y / 3) * 3;
    for (let j = yStart; j < yStart + 3; j++) {
      for (let i = xStart; i < xStart + 3; i++) {
        if (y !== j && x !== i && sudoku[j][i] === value) return false;
      }
    }
    return true;
  }
})(input);
