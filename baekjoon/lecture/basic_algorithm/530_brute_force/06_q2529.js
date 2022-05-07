const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const k = +input.shift();
const signs = input.shift().split(' ');

printResult(signs);

function printResult(signs) {
  const [min, max] = getIntegers(signs);
  console.log(max);
  console.log(min);
}

function getIntegers(signs) {
  const visited = new Array(10);
  const { length } = signs;
  const part = [];
  const integers = [];
  let found = false;

  for (let i = 0; i < 10; i++) {
    visited[i] = true;
    part.push(i);
    found = false;
    dfsMin(0, 0);
    found = false;
    dfsMax(0, 0);
    part.pop();
    visited[i] = false;
  }

  return [integers[0], integers[integers.length - 1]];

  function dfsMin(depth, signIdx) {
    if (found) return;
    if (depth === length) {
      integers.push(part.join(''));
      found = true;
      return;
    }
    for (let i = 0; i < 10; i++) {
      if (!visited[i]) {
        if (isLt(signs[signIdx])) {
          if (part[depth] < i) {
            visited[i] = true;
            part.push(i);
            dfsMin(depth + 1, signIdx + 1);
            part.pop();
            visited[i] = false;
          }
        } else {
          if (part[depth] > i) {
            visited[i] = true;
            part.push(i);
            dfsMin(depth + 1, signIdx + 1);
            part.pop();
            visited[i] = false;
          }
        }
      }
    }
  }

  function dfsMax(depth, signIdx) {
    if (found) return;
    if (depth === length) {
      integers.push(part.join(''));
      found = true;
      return;
    }
    for (let i = 9; i >= 0; i--) {
      if (!visited[i]) {
        if (isLt(signs[signIdx])) {
          if (part[depth] < i) {
            visited[i] = true;
            part.push(i);
            dfsMax(depth + 1, signIdx + 1);
            part.pop();
            visited[i] = false;
          }
        } else {
          if (part[depth] > i) {
            visited[i] = true;
            part.push(i);
            dfsMax(depth + 1, signIdx + 1);
            part.pop();
            visited[i] = false;
          }
        }
      }
    }
  }
}

function isLt(sign) {
  return sign === '<' ? true : false;
}
