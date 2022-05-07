const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

input.shift();
const commands = input.map((x) => x.split(/\s+/));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.stackSize = 0;
  }
  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.stackSize++;
  }
  pop() {
    if (!this.top) return -1;
    const popped = this.top.data;
    this.top = this.top.next;
    this.stackSize--;
    return popped;
  }
  size() {
    return this.stackSize;
  }
  empty() {
    return this.stackSize ? 0 : 1;
  }
  peak() {
    if (!this.top) return -1;
    return this.top.data;
  }
}

const commandProcessing = (commandArr) => {
  result = '';
  let stack = new Stack();
  commandArr.forEach((command) => {
    switch (command[0]) {
      case 'push':
        stack.push(command[1]);
        break;
      case 'pop':
        result += stack.pop() + '\n';
        break;
      case 'size':
        result += stack.size() + '\n';
        break;
      case 'empty':
        result += stack.empty() + '\n';
        break;
      case 'top':
        result += stack.peak() + '\n';
        break;
      default:
        break;
    }
  });

  console.log(result.trim());
  return 0;
};

commandProcessing(commands);
