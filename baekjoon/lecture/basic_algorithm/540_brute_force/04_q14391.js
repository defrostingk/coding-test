const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

input.shift();
const paper = input.map((column) => column.split('').map(Number));

console.log(getMaxScore(paper));

function getMaxScore(paper) {
  const height = paper.length;
  const width = paper[0].length;
  const size = width * height;
  const check = new Array(size);
  const score = [];
  let limit, sum, cur;

  for (let i = 0; i <= size; i++) {
    limit = i;
    dfs(0, 0);
  }

  return Math.max(...score);

  function dfs(depth, idx) {
    if (depth === limit) {
      sum = 0;
      getHorizontalSum();
      getVerticalSum();
      score.push(sum);
      return;
    }

    for (let i = idx; i < size; i++) {
      if (!check[i]) {
        check[i] = true;
        dfs(depth + 1, i + 1);
        check[i] = false;
      }
    }
  }

  function getHorizontalSum() {
    for (let y = 0; y < height; y++) {
      cur = 0;
      for (let x = 0; x < width; x++) {
        if (check[y * width + x]) {
          cur = cur * 10 + paper[y][x];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
  }
  function getVerticalSum() {
    for (let x = 0; x < width; x++) {
      cur = 0;
      for (let y = 0; y < height; y++) {
        if (!check[y * width + x]) {
          cur = cur * 10 + paper[y][x];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
  }
}
