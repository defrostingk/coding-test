const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const commands = input.map((x) => x.split(/\s+/));

const solution = (commands) => {
  let queue = [],
    result = "";

  commands.forEach((command) => {
    switch (command[0]) {
      case "push":
        queue[queue.length] = command[1];
        break;
      case "pop":
        result += (queue.length ? queue.splice(0, 1)[0] : "-1") + "\n";
        break;
      case "size":
        result += `${queue.length}\n`;
        break;
      case "empty":
        result += (queue.length ? "0" : "1") + "\n";
        break;
      case "front":
        result += (queue.length ? queue[0] : "-1") + "\n";
        break;
      case "back":
        result += (queue.length ? queue[queue.length - 1] : "-1") + "\n";
        break;
      default:
        break;
    }
  });

  console.log(result.trim());
  return 0;
};

solution(commands);
