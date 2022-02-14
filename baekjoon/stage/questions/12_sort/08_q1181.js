const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const data = [...new Set([...input])];

data.sort((a, b) => {
  if (a.length === b.length) if (a < b) return -1;
  return a.length - b.length;
});

console.log(data.join("\n").trim());
