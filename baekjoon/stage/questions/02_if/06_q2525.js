const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const currentTime = input
  .shift()
  .split(/\s+/)
  .map((x) => +x);
const requiredMinutes = +input;

const getEndTime = (curTime, reqTime) => {
  let [hours, minutes] = curTime;
  let addHours;
  minutes += reqTime;
  if (minutes >= 60) {
    addHours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    hours += addHours;
  }
  if (hours >= 24) {
    hours -= 24;
  }

  return `${hours} ${minutes}`;
};

console.log(getEndTime(currentTime, requiredMinutes));
