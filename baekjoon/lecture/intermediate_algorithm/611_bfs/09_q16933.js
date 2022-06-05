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
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.size) return null;
    const popped = this.head;

    if (this.head === this.tail) this.tail = null;

    this.head = this.head.next;
    this.size--;

    return popped.value;
  }
}

(function () {
  const [height, width, maxBroken] = input[0].split(' ').map(Number);
  const map = input.slice(1).map((row) => row.split('').map(Number));
  const [EMPTY, WALL] = [0, 1];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  if (height === 1 && width === 1) return console.log(1);

  console.log(bfs(0, 0, 0));

  function bfs(initX, initY, initBroken) {
    const queue = new Queue();
    queue.enqueue([initX, initY, initBroken, 1]);
    const visited = Array.from(Array(height), () =>
      Array.from(Array(width), () => new Array(maxBroken + 1))
    );
    visited[initY][initY][initBroken] = 1;

    while (queue.size) {
      const [curX, curY, curBroken, curDistance] = queue.dequeue();
      if (curX === width - 1 && curY === height - 1) return curDistance;

      for (let i = 0; i < dx.length; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];
        if (!isInRange(nextX, nextY)) continue;

        if (map[nextY][nextX] === EMPTY) {
          if (visited[nextY][nextX][curBroken]) continue;
          visited[nextY][nextX][curBroken] = 1;
          queue.enqueue([nextX, nextY, curBroken, curDistance + 1]);
        }

        if (map[nextY][nextX] === WALL && curBroken < maxBroken) {
          if (visited[nextY][nextX][curBroken + 1]) continue;
          const isDay = curDistance % 2;
          if (isDay) {
            visited[nextY][nextX][curBroken + 1] = 1;
            queue.enqueue([nextX, nextY, curBroken + 1, curDistance + 1]);
          } else {
            queue.enqueue([curX, curY, curBroken, curDistance + 1]);
          }
        }
      }
    }

    return -1;

    function isInRange(x, y) {
      return x >= 0 && y >= 0 && x < width && y < height;
    }
  }
})(input);
