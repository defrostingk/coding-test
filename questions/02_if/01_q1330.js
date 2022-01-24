const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().trim().split(" ");

const a = +input[0];
const b = +input[1];

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a === b) {
  console.log("==");
}
