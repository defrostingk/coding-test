const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const data = input.map((x) => x.split(/\s+/).map((x) => +x));

data.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
});

console.log(
  data.reduce((acc, cur) => (acc += `${cur[0]} ${cur[1]}\n`), "").trim()
);
