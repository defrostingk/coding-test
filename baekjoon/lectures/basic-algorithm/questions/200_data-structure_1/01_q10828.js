const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();

const commands = input.map((x) => x.split(/\s+/));
let stack = [];
let top = -1;

const newPush = (data) => {
  stack[++top] = data;
  return 0;
};
const newPop = () => {
  if (top < 0) return -1;
  top--;
  return stack.splice(-1)[0];
};
const newSize = () => {
  return top + 1;
};
const newEmpty = () => {
  return top < 0 ? 1 : 0;
};
const newTop = () => {
  return top < 0 ? -1 : stack[top];
};

const commandProcessing = (commandArr) => {
  result = "";
  commandArr.forEach((command) => {
    if (command[0] === "push") newPush(command[1]);
    else {
      if (command[0] === "pop") result += newPop();
      else if (command[0] === "size") result += newSize();
      else if (command[0] === "empty") result += newEmpty();
      else if (command[0] === "top") result += newTop();
      else result += "Command is wrong";
      result += "\n";
    }
  });

  return result.trim();
};

console.log(commandProcessing(commands));
