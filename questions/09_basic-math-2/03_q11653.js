const fs = require("fs");
const n = +fs.readFileSync("../input.txt").toString().trim();

const factorization = (num) => {
  if (num === 1) return;
  let result = "";
  let divider = 2;
  while (num !== 1) {
    while (num % divider !== 0) {
      divider++;
    }
    result += divider + "\n";
    num /= divider;
    divider = 2;
  }
  console.log(result.trim());
};

factorization(n);
