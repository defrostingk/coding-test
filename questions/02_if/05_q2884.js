const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().trim().split(/\s+/);

let hour = +input[0];
let minute = +input[1];

if (minute < 45) {
  minute += 15;
  hour -= 1;
  if (hour < 0) {
    hour = 23;
  }
} else {
  minute -= 45;
}

console.log(hour, minute);
