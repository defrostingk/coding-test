const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const integers = +input.shift();
const signs = input.shift().split('');
let signMatrix = Array.from(Array(integers), () => new Array(integers));

for (let i = 0; i < integers; i++) {
  for (let j = 0; j < integers - i; j++) {
    signMatrix[i][i + j] = signs.shift();
  }
}

printSequence(integers, signMatrix);

function printSequence(integers, signMatrix) {
  console.log(getSequence(integers, signMatrix).join(' '));
}

function getSequence(integers, signMatrix) {
  let sequence = new Array(integers);
  let found = false;

  dfs(0);

  return sequence;

  function dfs(depth) {
    if (depth === integers) {
      found = true;
      return;
    }
    let sign = signMatrix[depth][depth] === '-' ? -1 : 1;
    for (let i = 0; i <= 10; i++) {
      if (found) return;
      let integer = sign * i;
      sequence[depth] = integer;
      if (check(depth)) dfs(depth + 1);
    }
  }

  function check(depth) {
    let sum = 0;
    let sign;
    for (let i = depth; i >= 0; i--) {
      sum += sequence[i];
      sign = signMatrix[i][depth];
      if (sign === '+' && sum <= 0) return false;
      if (sign === '-' && sum >= 0) return false;
      if (sign === '0' && sum !== 0) return false;
    }
    return true;
  }
}
