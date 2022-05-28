const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const ladders = {};
  input.slice(1).forEach((ladder) => {
    const [from, to] = ladder.split(' ').map(Number);
    ladders[from] = to;
  });
  const visited = new Array(101);

  bfs(1);
  console.log(visited[100] - 1);

  function bfs(start) {
    const queue = [start];
    let head = 0;
    visited[start] = 1;

    while (queue.length > head) {
      const curBlock = queue[head++];

      if (curBlock === 100) break;

      for (let i = 1; i <= 6; i++) {
        let nextBlock = curBlock + i;
        if (nextBlock > 100) continue;
        if (!visited[nextBlock]) {
          if (ladders[nextBlock]) {
            visited[nextBlock] = visited[curBlock] + 1;
            nextBlock = ladders[nextBlock];
            if (!visited[nextBlock]) {
              visited[nextBlock] = visited[curBlock] + 1;
              queue.push(nextBlock);
            }
          } else {
            visited[nextBlock] = visited[curBlock] + 1;
            queue.push(nextBlock);
          }
        }
      }
    }
  }
})(input);
