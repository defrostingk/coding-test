const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const commands = input.map((x) => x.split(/\s+/));

class Deque {
  constructor() {
    this.deque = [];
    this.head = 0;
    this.tail = 0;
  }
  push_front(data) {
    for (let i = this.tail - 1; i >= 0; i--) this.deque[i + 1] = this.deque[i];
    this.deque[0] = data;
    this.tail++;
  }
  push_back(data) {
    this.deque[this.tail++] = data;
  }
  pop_front() {
    if (!this.tail) return -1;
    this.tail--;
    return this.deque.splice(this.head, 1)[0];
  }
  pop_back() {
    if (!this.tail) return -1;
    this.tail--;
    return this.deque.splice(this.tail, 1)[0];
  }
  size() {
    return this.tail;
  }
  empty() {
    if (this.tail) return 0;
    return 1;
  }
  front() {
    if (!this.tail) return -1;
    return this.deque[this.head];
  }
  back() {
    if (!this.tail) return -1;
    return this.deque[this.tail - 1];
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
