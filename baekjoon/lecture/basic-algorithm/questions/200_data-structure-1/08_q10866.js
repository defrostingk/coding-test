const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const commands = input.map((x) => x.split(/\s+/));

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.dequeSize = 0;
  }
  push_front(data) {
    const node = new Node(data);
    if (!this.dequeSize) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.dequeSize++;
  }
  push_back(data) {
    const node = new Node(data);
    if (!this.dequeSize) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.dequeSize++;
  }
  pop_front() {
    if (!this.dequeSize) return -1;
    const popped = this.head.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.dequeSize--;
    return popped;
  }
  pop_back() {
    if (!this.dequeSize) return -1;
    const popped = this.tail.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.dequeSize--;
    return popped;
  }
  size() {
    return this.dequeSize;
  }
  empty() {
    return this.dequeSize ? 0 : 1;
  }
  front() {
    return this.dequeSize ? this.head.data : -1;
  }
  back() {
    return this.dequeSize ? this.tail.data : -1;
  }
}

const processCommands = (commands) => {
  let result = "";
  let deque = new Deque();

  commands.forEach((command) => {
    switch (command[0]) {
      case "push_front":
        deque.push_front(command[1]);
        break;
      case "push_back":
        deque.push_back(command[1]);
        break;
      case "pop_front":
        result += `${deque.pop_front()}\n`;
        break;
      case "pop_back":
        result += `${deque.pop_back()}\n`;
        break;
      case "size":
        result += `${deque.size()}\n`;
        break;
      case "empty":
        result += `${deque.empty()}\n`;
        break;
      case "front":
        result += `${deque.front()}\n`;
        break;
      case "back":
        result += `${deque.back()}\n`;
        break;
      default:
        break;
    }
  });

  console.log(result.trim());
  return 0;
};

processCommands(commands);
