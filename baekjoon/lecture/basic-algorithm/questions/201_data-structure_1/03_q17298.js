const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [n, sequence] = input.map((x) => x.split(/\s+/).map((x) => +x));

const stackTop = (stack) => {
  return stack.length ? stack[stack.length - 1] : undefined;
};

const getNGE = (sequence) => {
  const { length } = sequence;
  const stack = [];
  const nge = new Array(length).fill(-1);

  for (let i = 0; i < length; i++) {
    while (stack.length && sequence[stackTop(stack)] < sequence[i]) {
      nge[stack.pop()] = sequence[i];
    }
    stack.push(i);
  }

  return nge.join(" ");
};

console.log(getNGE(sequence));
