const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s+/);

const dice = input.map((x) => +x);

const getReward = (dice) => {
  const [a, b, c] = dice;
  let reward;
  if (a === b && b === c) {
    reward = 10000 + a * 1000;
  } else {
    reward =
      a === b
        ? 1000 + a * 100
        : b === c
        ? 1000 + b * 100
        : c === a
        ? 1000 + c * 100
        : 100 * Math.max(a, b, c);
  }

  return reward;
};

console.log(getReward(dice));
