const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  class PriorityQueue {
    constructor() {
      this.heap = [];
      this.size = 0;
    }

    enqueue(building) {
      this.size++;
      let idx = this.size;

      while (idx !== 1) {
        const parentIdx = Math.floor(idx / 2);
        if (this.heap[parentIdx].x >= building.x) {
          this.heap[idx] = this.heap[parentIdx];
          idx = parentIdx;
        } else break;
      }

      this.heap[idx] = building;
    }

    dequeue() {
      if (this.isEmpty()) return;
      let popped = this.heap[1];
      let tmp = this.heap.pop();
      this.heap[1] = tmp;
      this.size--;

      let parent = 1;
      let child = 2;

      while (child <= this.size) {
        if (
          this.heap[child + 1] &&
          this.heap[child].x > this.heap[child + 1].x &&
          child < this.size
        ) {
          child++;
        }
        if (tmp.x <= this.heap[child].x) break;
        this.heap[parent] = this.heap[child];
        parent = child;
        child *= 2;
      }
      this.heap[parent] = tmp;

      return popped;
    }

    isEmpty() {
      return !this.size;
    }
  }

  const pq = new PriorityQueue();
  input.slice(1).forEach((building) => {
    const [left, height, right] = building.split(' ').map(Number);
    pq.enqueue({ x: left, height });
    pq.enqueue({ x: right, height: -height });
  });

  const heights = new Map();
  const skyline = [];

  let preHeight = 0;
  let maxHeight = 0;
  while (!pq.isEmpty()) {
    const { x, height } = pq.dequeue();
    if (height > 0) {
      heights.set(height, x);
      if (maxHeight < height) maxHeight = height;
    } else {
      heights.delete(-height);
      maxHeight = heights.size ? Math.max(...heights.keys()) : 0;
    }

    if (preHeight !== maxHeight) {
      skyline.push(x, maxHeight);
      preHeight = maxHeight;
    }
  }

  console.log(skyline.join(' '));
})(input);
