const fs = require("fs");
const radius = +fs.readFileSync("../input.txt").toString().trim();

const getEuclideanCircle = (radius) => {
  return radius * radius * Math.PI;
};
const getTaxicapCircle = (radius) => {
  return 2 * radius * radius;
};

const result = getEuclideanCircle(radius) + "\n" + getTaxicapCircle(radius);

console.log(result);
