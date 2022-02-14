const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input.shift();
const data = input.map((x) => x.split(/\s+/).map((x) => +x));

const getBodyRanking = (dataNum, data) => {
  let ranking = new Array(dataNum);
  let topRanking = 0;
  data.forEach((currentBody, currentBodyIdx, bodys) => {
    bodys.forEach((otherBody) => {
      if (currentBody[0] < otherBody[0] && currentBody[1] < otherBody[1])
        topRanking++;
    });
    ranking[currentBodyIdx] = ++topRanking;
    topRanking = 0;
  });

  return ranking;
};

console.log(getBodyRanking(n, data).join(" "));
