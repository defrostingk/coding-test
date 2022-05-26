const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const board = input.slice(1).map((row) => row.split(''));

  const EMPTY = '.';
  const WALL = '#';
  const HOLE = 'O';
  const RED = 'R';
  const BLUE = 'B';

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const UP = 0;
  const DOWN = 1;
  const LEFT = 2;
  const RIGHT = 3;

  class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const redBall = new Ball();
  const blueBall = new Ball();
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (board[j][i] === RED) {
        redBall.x = i;
        redBall.y = j;
        board[j][i] = EMPTY;
      }
      if (board[j][i] === BLUE) {
        blueBall.x = i;
        blueBall.y = j;
        board[j][i] = EMPTY;
      }
    }
  }

  let minCnt = -1;

  bfs(redBall, blueBall);

  console.log(minCnt);

  function bfs(redBall, blueBall) {
    const queue = [[redBall, blueBall, 1]];
    let head = 0;
    let found = 0;

    while (queue.length > head) {
      if (found) break;
      const [curRedBall, curBlueBall, cnt] = queue[head++];
      for (let i = 0; i < 4; i++) {
        const nextRedBall = new Ball(curRedBall.x, curRedBall.y);
        const nextBlueBall = new Ball(curBlueBall.x, curBlueBall.y);
        switch (i) {
          case UP:
            if (nextRedBall.y > nextBlueBall.y) {
              moveBall(nextBlueBall, nextRedBall, i);
              moveBall(nextRedBall, nextBlueBall, i);
            } else {
              moveBall(nextRedBall, nextBlueBall, i);
              moveBall(nextBlueBall, nextRedBall, i);
            }
            break;
          case DOWN:
            if (nextRedBall.y > nextBlueBall.y) {
              moveBall(nextRedBall, nextBlueBall, i);
              moveBall(nextBlueBall, nextRedBall, i);
            } else {
              moveBall(nextBlueBall, nextRedBall, i);
              moveBall(nextRedBall, nextBlueBall, i);
            }
            break;
          case LEFT:
            if (nextRedBall.x > nextBlueBall.x) {
              moveBall(nextBlueBall, nextRedBall, i);
              moveBall(nextRedBall, nextBlueBall, i);
            } else {
              moveBall(nextRedBall, nextBlueBall, i);
              moveBall(nextBlueBall, nextRedBall, i);
            }
            break;
          case RIGHT:
            if (nextRedBall.x > nextBlueBall.x) {
              moveBall(nextRedBall, nextBlueBall, i);
              moveBall(nextBlueBall, nextRedBall, i);
            } else {
              moveBall(nextBlueBall, nextRedBall, i);
              moveBall(nextRedBall, nextBlueBall, i);
            }
            break;
        }
        if (nextBlueBall.x === -1) continue;
        if (nextRedBall.x === -1) {
          found = 1;
          minCnt = cnt;
          break;
        }
        if (cnt >= 10) continue;
        if (
          curRedBall.x === nextRedBall.x &&
          curRedBall.y === nextRedBall.y &&
          curBlueBall.x === nextBlueBall.x &&
          curBlueBall.y === nextBlueBall.y
        )
          continue;
        queue.push([nextRedBall, nextBlueBall, cnt + 1]);
      }
    }
  }
  function moveBall(ball, otherBall, dir) {
    while (1) {
      const nextX = ball.x + dx[dir];
      const nextY = ball.y + dy[dir];
      if (nextX === otherBall.x && nextY === otherBall.y) {
        break;
      } else if (board[nextY][nextX] === EMPTY) {
        ball.x = nextX;
        ball.y = nextY;
      } else if (board[nextY][nextX] === HOLE) {
        ball.x = -1;
        ball.y = -1;
        break;
      } else break;
    }
  }
})(input);
