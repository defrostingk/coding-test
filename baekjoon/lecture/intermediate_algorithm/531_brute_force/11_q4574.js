const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const table = {};
  for (let i = 0; i < 9; i++) {
    table[i + 1] = i;
    table[String.fromCharCode(i + 65)] = i;
  }

  let head = 0;
  let puzzleIdx = 0;
  while (input.length > head) {
    puzzleIdx++;
    const n = +input[head++];
    if (!n) break;
    const puzzle = Array.from(Array(9), () => new Array(9));
    input.slice(head, n + head).forEach((domino) => {
      head++;
      const [u, lu, v, lv] = domino.split(' ');
      puzzle[table[lu[0]]][table[lu[1]]] = +u;
      puzzle[table[lv[0]]][table[lv[1]]] = +v;
    });
    input
      .slice(head, head++ + 1)[0]
      .split(' ')
      .forEach((value, idx) => {
        puzzle[table[value[0]]][table[value[1]]] = idx + 1;
      });

    const dominos = Array.from(Array(10), () => new Array(10));
    const dx = [0, 1];
    const dy = [1, 0];

    console.log(`Puzzle ${puzzleIdx}`);
    let found = 0;
    dfs(0);

    function dfs(idx) {
      if (found) return;
      if (idx >= 81) {
        puzzle.forEach((row) => console.log(row.join('')));
        found = 1;
        return;
      }

      const curX = idx % 9;
      const curY = Math.floor(idx / 9);

      if (!puzzle[curY][curX]) {
        for (let k = 0; k < 2; k++) {
          const nextX = curX + dx[k];
          const nextY = curY + dy[k];
          if (isInRange(nextX, nextY) && !puzzle[nextY][nextX]) {
            for (let j = 1; j <= 9; j++) {
              for (let i = 1; i <= 9; i++) {
                if (i === j) continue;
                if (dominos[i][j]) continue;
                if (
                  isAvailable(curX, curY, i) &&
                  isAvailable(nextX, nextY, j)
                ) {
                  dominos[i][j] = 1;
                  dominos[j][i] = 1;
                  puzzle[curY][curX] = i;
                  puzzle[nextY][nextX] = j;
                  dfs(idx + 1);
                  puzzle[curY][curX] = 0;
                  puzzle[nextY][nextX] = 0;
                  dominos[i][j] = 0;
                  dominos[j][i] = 0;
                }
              }
            }
          }
        }
      } else {
        dfs(idx + 1);
      }
    }

    function isInRange(x, y) {
      return x >= 0 && y >= 0 && x < 9 && y < 9;
    }

    function isAvailable(x, y, value) {
      for (let i = 0; i < 9; i++) {
        if (puzzle[y][i] === value) return false;
      }
      for (let j = 0; j < 9; j++) {
        if (puzzle[j][x] === value) return false;
      }
      const xStart = Math.floor(x / 3) * 3;
      const yStart = Math.floor(y / 3) * 3;
      for (let j = yStart; j < yStart + 3; j++) {
        for (let i = xStart; i < xStart + 3; i++) {
          if (puzzle[j][i] === value) return false;
        }
      }
      return true;
    }
  }
})(input);
