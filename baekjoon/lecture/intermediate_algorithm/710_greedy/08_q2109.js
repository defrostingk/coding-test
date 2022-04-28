const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

class Schedule {
  constructor(pay, day) {
    this.pay = pay;
    this.day = day;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }
  enqueue(pay, day) {
    this.size++;
    const newNode = new Schedule(pay, day);
    let idx = this.size;

    while (idx !== 1) {
      const parentIdx = Math.floor(idx / 2);
      if (this.heap[parentIdx].pay <= pay) {
        this.heap[idx] = this.heap[parentIdx];
        idx = parentIdx;
      } else break;
    }

    this.heap[idx] = newNode;
  }

  dequeue() {
    if (this.isEmpty()) return new Schedule(0, 0);
    let popped = this.heap[1];
    let tmp = this.heap.pop();
    this.heap[1] = tmp;
    this.size--;

    let parent = 1;
    let child = 2;

    while (child <= this.size) {
      if (
        this.heap[child + 1] &&
        this.heap[child].pay < this.heap[child + 1].pay &&
        child < this.size
      ) {
        child++;
      }
      if (tmp.pay >= this.heap[child].pay) break;
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
  front() {
    if (this.isEmpty()) return new Schedule(0, 0);
    return this.heap[1];
  }
}

solution();

function solution() {
  const n = +input[0];
  if (!n) return console.log(n);
  const schedules = input
    .slice(1)
    .map((schedule) => schedule.split(' ').map(Number))
    .sort((a, b) => b[1] - a[1]);

  const pq = new PriorityQueue();
  let payMax = 0;
  let idx = 0;

  for (let i = n; i > 0; i--) {
    while (idx < n && schedules[idx][1] >= i) {
      const [pay, day] = schedules[idx++];
      pq.enqueue(pay, day);
    }
    if (i <= pq.front().day) payMax += pq.dequeue().pay;
  }

  console.log(payMax);
}
