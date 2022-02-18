const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [n, sequence] = input.map((x) => x.split(/\s+/).map((x) => +x));

const getNGE = (sequence) => {
  let NGE = "";
  let { length } = sequence;
  let stack = [];

  for (let i = 0; i < length; i++) {
    let j = i;
    stack = [];
    while (sequence[j++] <= sequence[i]) {
      if (j >= length) break;
      stack.push(sequence[j]);
    }
    console.log(stack, stack.length);
    NGE += stack.length ? stack.pop() + " " : "-1 ";
  }

  return NGE.trim();
};

console.log(getNGE(sequence));
