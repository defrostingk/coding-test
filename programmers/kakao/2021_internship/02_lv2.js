const places = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

function solution(places) {
  var answer = [];
  const size = 5;
  const MAN = 'P';
  const PART = 'X';

  places.forEach((place) => {
    let found = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (place[y][x] === MAN) found = bfs(x, y, place);
        if (found) break;
      }
      if (found) break;
    }
    answer.push(1 - found);
  });

  function bfs(x, y, place) {
    const visited = Array.from(Array(size), () => new Array(size));
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    const queue = [[x, y]];
    let head = 0;
    visited[y][x] = 1;

    while (queue.length > head) {
      const [xCur, yCur] = queue[head++];
      if (visited[yCur][xCur] > 2) return 0;

      for (let i = 0; i < dx.length; i++) {
        const [xNext, yNext] = [xCur + dx[i], yCur + dy[i]];
        if (isAvailable(xNext, yNext) && place[yCur][xCur] !== PART) {
          if (place[yNext][xNext] === MAN) return 1;
          visited[yNext][xNext] = visited[yCur][xCur] + 1;
          queue.push([xNext, yNext]);
        }
      }
    }

    return 0;

    function isAvailable(x, y) {
      return x >= 0 && y >= 0 && x < size && y < size && !visited[y][x];
    }
  }

  return answer;
}

console.log(solution(places));
