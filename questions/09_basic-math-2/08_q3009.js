const fs = require("fs");
const [dot1, dot2, dot3] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(/\s+/));

const coordinate4thDot = (dot1, dot2, dot3) => {
  let x4 = dot1[0],
    y4 = dot1[1];

  if (dot2[0] !== dot3[0]) x4 = x4 === dot2[0] ? dot3[0] : dot2[0];
  if (dot2[1] !== dot3[1]) y4 = y4 === dot2[1] ? dot3[1] : dot2[1];

  return `${x4} ${y4}`;
};

console.log(coordinate4thDot(dot1, dot2, dot3));
