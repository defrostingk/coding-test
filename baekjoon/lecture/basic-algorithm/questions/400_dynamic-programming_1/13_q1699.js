const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = +input;

const minTermsInSquare = (natural) => {
  const square = new Array(natural + 1);
  let naturalMinusSquare;
  square[0] = 0;

  for (let i = 1; i < natural + 1; i++) {
    square[i] = i;
    for (let j = 1; j * j <= i; j++) {
      naturalMinusSquare = i - j * j;
      if (square[i] > square[naturalMinusSquare] + 1) {
        square[i] = square[naturalMinusSquare] + 1;
      }
    }
  }

  return square[natural];
};

console.log(minTermsInSquare(n));
