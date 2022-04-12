const fs = require('fs');
const [n, k] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(getShortestTimeAndRoute(n, k).join('\n'));

function getShortestTimeAndRoute(from, to) {
  if (from === to) {
    return [0, from];
  }
  if (from > to) {
    const routeRecord = [];
    for (let i = from; i >= to; i--) {
      routeRecord.push(i);
    }
    return [from - to, routeRecord.join(' ')];
  }

  const MAX = to * 2 <= 100000 ? to * 2 : 100000;
  const visited = new Array(MAX);
  visited[from] = 1;
  const routeRecord = new Array(MAX);

  bfs(from, to);

  const route = getRoute(from, to);

  return [visited[to] - 1, route];

  function getRoute(from, to) {
    let prev, current;
    const route = [to];

    current = to;

    while (current !== from) {
      prev = routeRecord[current];
      route.push(prev);
      current = prev;
    }

    return route.reverse().join(' ');
  }

  function bfs(from, to) {
    const queue = [from];
    let head = 0;

    while (queue.length > head) {
      const current = queue[head++];

      for (let next of [current + 1, current - 1, current * 2]) {
        if (isAvailable(next, visited)) {
          queue.push(next);
          routeRecord[next] = current;
          visited[next] = visited[current] + 1;
        }
        if (next === to) return;
      }
    }
    return -1;
  }

  function isAvailable(num, visited) {
    return num >= 0 && num <= MAX && !visited[num];
  }
}
