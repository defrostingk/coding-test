const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input.shift();
const data = input.map((x) => x.split(/\s+/).map((x) => +x));

const getBodyRanking = (dataNum, data) => {
  let ranking = new Array(dataNum);

  return ranking;
};

console.log(getBodyRanking(n, data));
