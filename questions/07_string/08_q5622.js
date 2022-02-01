const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("");

let dialTimeReq = input.map((x) => x.charCodeAt());

const dial = [
  [""],
  [65, 66, 67],
  [68, 69, 70],
  [71, 72, 73],
  [74, 75, 76],
  [77, 78, 79],
  [80, 81, 82, 83],
  [84, 85, 86],
  [87, 88, 89, 90],
];

dialTimeReq.forEach((dialInput, dialInputIdx) =>
  dial.forEach((dial, dialIdx) => {
    dialTimeReq[dialInputIdx] = dial.includes(dialInput)
      ? dialIdx + 2
      : dialTimeReq[dialInputIdx];
  })
);

let totalTimeReq = dialTimeReq.reduce((acc, cur) => (acc += cur), 0);

console.log(totalTimeReq);
