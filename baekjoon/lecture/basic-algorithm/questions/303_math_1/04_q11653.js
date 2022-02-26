const fs = require("fs");
const integer = +fs.readFileSync("../input.txt").toString().trim();

const factorization = (integer) => {
  if (integer === 1) return;
  const primeFactor = [];
  let factor = 2;

  while (integer > 1) {
    if (integer % factor === 0) {
      primeFactor.push(factor);
      integer /= factor;
    } else {
      factor++;
    }
  }

  console.log(primeFactor.join("\n"));
};

factorization(integer);
