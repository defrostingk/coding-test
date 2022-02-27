const fs = require("fs");
const naturalNum = +fs.readFileSync("../input.txt").toString().trim();

const factorization = (naturalNum) => {
  if (naturalNum === 1) return;
  const primeFactor = [];
  let factor = 2;

  while (naturalNum > 1) {
    if (naturalNum % factor === 0) {
      primeFactor.push(factor);
      naturalNum /= factor;
    } else {
      factor++;
    }
  }

  console.log(primeFactor.join("\n"));
};

factorization(naturalNum);
