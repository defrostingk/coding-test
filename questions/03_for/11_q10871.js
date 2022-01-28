const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [n, x] = input[0].split(" ").map((x) => +x);
const data = input[1].split(" ").map((x) => +x);

let result = "";

for (let i = 0; i < n; i++) {
  result += data[i] < x ? `${data[i]} ` : "";
}

console.log(result);
