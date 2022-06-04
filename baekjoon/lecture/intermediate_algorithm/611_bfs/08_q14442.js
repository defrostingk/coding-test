const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.tail = null;
    }

    const popped = this.head;

    this.head = this.head.next;
    this.length--;

    return popped.value;
  }
}

(function (input) {
  const [height, width, maxBroken] = input[0].split(' ').map(Number);
  if (height === 1 && width === 1) return console.log(1);
  const map = input.slice(1).map((row) => row.split('').map(Number));
  const [EMPTY, WALL] = [0, 1];

  console.log(bfs(0, 0, 0));

  function bfs(startX, startY, broken) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const queue = new Queue();
    queue.enqueue([startX, startY, broken]);
    const visited = Array.from(Array(height), () =>
      Array.from(Array(width), () => new Array(maxBroken + 1))
    );
    visited[startY][startX][broken] = 1;

    while (queue.length) {
      const [curX, curY, curBroken] = queue.dequeue();
      if (curX === width - 1 && curY === height - 1)
        return visited[curY][curX][curBroken];

      for (let i = 0; i < dx.length; i++) {
        const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
        if (!isInRange(nextX, nextY)) continue;

        if (map[nextY][nextX] === EMPTY) {
          if (visited[nextY][nextX][curBroken]) continue;
          visited[nextY][nextX][curBroken] = visited[curY][curX][curBroken] + 1;
          queue.enqueue([nextX, nextY, curBroken]);
        }

        if (map[nextY][nextX] === WALL && curBroken < maxBroken) {
          if (visited[nextY][nextX][curBroken + 1]) continue;
          visited[nextY][nextX][curBroken + 1] =
            visited[curY][curX][curBroken] + 1;
          queue.enqueue([nextX, nextY, curBroken + 1]);
        }
      }
    }

    return -1;
  }

  function isInRange(x, y) {
    return x >= 0 && y >= 0 && x < width && y < height;
  }
})(input);
