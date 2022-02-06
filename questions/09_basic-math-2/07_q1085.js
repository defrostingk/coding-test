const fs = require("fs");
const [x, y, w, h] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const minDistanceToBoundary = (x, y, w, h) => {
  let distance = [];

  distance.push(Math.sqrt((y - h) * (y - h)));
  distance.push(Math.sqrt(y * y));
  distance.push(Math.sqrt(x * x));
  distance.push(Math.sqrt((x - w) * (x - w)));

  return Math.min.apply(null, distance);
};

console.log(minDistanceToBoundary(x, y, w, h));
