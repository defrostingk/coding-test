const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [n, sequence] = input.map((x) => x.split(/\s+/).map((x) => +x));

const getNGF = (sequence) => {
  const { length } = sequence;
  const ngf = new Array(length).fill(-1);
  const frequency = {};
  const stack = []; // idx
  sequence.forEach((num) => {
    frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
  });

  for (let i = 0; i < length; i++) {
    while (
      stack.length &&
      frequency[sequence[stack[stack.length - 1]]] < frequency[sequence[i]]
    ) {
      ngf[stack.pop()] = sequence[i];
    }
    stack.push(i);
  }

  return ngf.join(" ");
};

console.log(getNGF(sequence));
