const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  x = +input[0];
  y = +input[1];
  let quadrant = null;

  if (x > 0 && y > 0) {
    quadrant = 1;
  } else if (x < 0 && y > 0) {
    quadrant = 2;
  } else if (x < 0 && y < 0) {
    quadrant = 3;
  } else if (x > 0 && y < 0) {
    quadrant = 4;
  }
  console.log(quadrant);
  process.exit();
});
