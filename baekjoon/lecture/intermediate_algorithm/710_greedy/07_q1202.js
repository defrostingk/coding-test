const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  enqueue(value) {
    this.size++;
    let idx = this.size;

    // heapify top
    while (idx !== 1) {
      const parentIdx = Math.floor(idx / 2);
      if (this.heap[parentIdx] <= value) {
        this.heap[idx] = this.heap[parentIdx];
        idx = parentIdx;
      } else break;
    }
    this.heap[idx] = value;
  }

  dequeue() {
    if (this.isEmpty()) return 0;

    let popped = this.heap[1];
    let tmp = this.heap.pop();
    this.heap[1] = tmp;
    this.size--;

    // heapify down
    let parent = 1;
    let child = 2;
    while (child <= this.size) {
      if (this.heap[child] < this.heap[child + 1] && child < this.size) {
        child += 1;
      }

      if (tmp >= this.heap[child]) break;
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

solution();

function solution() {
  let [jewels, bags] = input[0].split(' ').map(Number);
  const jewelsData = input
    .slice(1, jewels + 1)
    .map((jewel) => jewel.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);
  const bagsMaxWeight = input
    .slice(jewels + 1)
    .map(Number)
    .sort((a, b) => a - b);

  let sum = 0;
  let jewelIdx = 0;
  const pq = new PriorityQueue();

  for (let i = 0; i < bags; i++) {
    while (jewelIdx < jewels) {
      const jewelWeight = jewelsData[jewelIdx][0];
      const jewelValue = jewelsData[jewelIdx][1];
      if (bagsMaxWeight[i] >= jewelWeight) {
        pq.enqueue(jewelValue);
        jewelIdx++;
      } else {
        break;
      }
    }
    sum += pq.dequeue();
  }

  console.log(sum);
}
