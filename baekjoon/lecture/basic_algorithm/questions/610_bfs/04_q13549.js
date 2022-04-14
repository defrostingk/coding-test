const fs = require('fs');
const [n, k] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(getMinTime(n, k));

function getMinTime(from, to) {
  if (from >= to) {
    return from - to;
  }
  const MAX = 100000;
  const visited = new Array(MAX + 1);
  const queue = [from];
  visited[from] = 0;
  let head = 0;

  while (queue.length > head) {
    const current = queue[head++];

    if (current === to) {
      return visited[current];
    }

    for (let next of [current * 2, current - 1, current + 1]) {
      if (isAvailable(next)) {
        visited[next] =
          next === current * 2 ? visited[current] : visited[current] + 1;
        queue.push(next);
      }
    }
  }

  function isAvailable(num) {
    return num >= 0 && num <= MAX && !visited[num];
  }
}
