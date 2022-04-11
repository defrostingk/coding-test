const fs = require('fs');
const [n, k] = fs
  .readFileSync('../input.txt')
  .toString()
  .split(' ')
  .map(Number);
const MAX = 100000;

console.log(getShortestTime(n, k));

function getShortestTime(n, k) {
  if (n >= k) return n - k;
  const visited = new Array(MAX + 1);
  const queue = [n];
  let head = 0;

  visited[n] = 1;

  while (queue.length > head) {
    const current = queue[head++];

    for (let next of [current - 1, current + 1, current * 2]) {
      if (isAvailable(next)) {
        if (next === k) return visited[current];
        queue.push(next);
        visited[next] = visited[current] + 1;
      }
    }
  }

  return -1;

  function isAvailable(num) {
    return num >= 0 && num <= MAX && !visited[num];
  }
}
