const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const sequence = input.slice(1).map((x) => +x);

const getRequiredOp = (sequence) => {
  const stack = [];
  let cnt = 1;
  let result = "";

  for (let i = 0; i < sequence.length; i++) {
    while (cnt <= sequence[i]) {
      stack.push(cnt++);
      result += "+\n";
    }
    if (stack.pop() !== sequence[i]) return "NO";
    result += "-\n";
  }

  return result.trim();
};

console.log(getRequiredOp(sequence));
