const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const commands = input.map((x) => x.split(/\s+/));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.queueSize = 0;
  }
  push(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.queueSize++;
  }
  pop() {
    if (!this.queueSize) return -1;
    const popped = this.head.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.queueSize--;
    return popped;
  }
  size() {
    return this.queueSize;
  }
  empty() {
    return this.queueSize ? 0 : 1;
  }
  front() {
    return this.queueSize ? this.head.data : -1;
  }
  back() {
    return this.queueSize ? this.tail.data : -1;
  }
}

const solution = (commands) => {
  let result = "";
  let queue = new Queue();

  commands.forEach((command) => {
    switch (command[0]) {
      case "push":
        queue.push(command[1]);
        break;
      case "pop":
        result += queue.pop() + "\n";
        break;
      case "size":
        result += queue.size() + "\n";
        break;
      case "empty":
        result += queue.empty() + "\n";
        break;
      case "front":
        result += queue.front() + "\n";
        break;
      case "back":
        result += queue.back() + "\n";
        break;
      default:
        break;
    }
  });

  console.log(result.trim());
  return 0;
};

solution(commands);
