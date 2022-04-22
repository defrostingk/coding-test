const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const schedule = input
  .slice(1)
  .map((meeting) => meeting.split(' ').map(Number));

schedule.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let cnt = 0;
let preEndTime = 0;
schedule.forEach((meeting) => {
  if (meeting[0] >= preEndTime) {
    cnt++;
    preEndTime = meeting[1];
  }
});

console.log(cnt);
