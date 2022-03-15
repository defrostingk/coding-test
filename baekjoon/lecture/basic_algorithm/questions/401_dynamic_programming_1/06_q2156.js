const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const glass = input.shift();
const wine = input;

const getMaxWineToDrink = (wine) => {
  wine.unshift(0);
  const { length } = wine;
  let maxWine = new Array(length);
  maxWine[1] = wine[1];
  maxWine[2] = wine[1] + wine[2];
  maxWine[3] = Math.max(
    wine[1] + wine[2],
    wine[2] + wine[3],
    wine[1] + wine[3]
  );
  let oxoo;
  let ooxo;
  let xoox;

  for (let i = 4; i < length; i++) {
    oxoo = maxWine[i - 3] + wine[i - 1] + wine[i];
    ooxo = maxWine[i - 2] + wine[i];
    xoox = maxWine[i - 1];
    maxWine[i] = Math.max(oxoo, ooxo, xoox);
  }
  return maxWine[glass];
};

const printMaxWineToDrink = () => {
  console.log(getMaxWineToDrink(wine));
};

printMaxWineToDrink();
