const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trimEnd().split("\n");

let str = input.shift();
input.shift();
const commands = input.map((x) => x.split(/\s+/));

const solution = (str, commands) => {
  str = str.split("");
  let left = [...str];
  let right = [];

  commands.forEach((command) => {
    switch (command[0]) {
      case "L":
        if (left.length) right.push(left.pop());
        break;
      case "D":
        if (right.length) left.push(right.pop());
        break;
      case "B":
        if (left.length) left.pop();
        break;
      default:
        left.push(command[1]);
        break;
    }
  });
  console.log(left.join("") + right.reverse().join(""));
  return 0;
};

solution(str, commands);
