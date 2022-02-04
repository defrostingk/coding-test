const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const howManyBags = (sugar) => {
  let bags = [];
  const max5kg = Math.ceil(sugar / 5);
  const max3kg = Math.ceil(sugar / 3);
  let cur5kg, cur3kg;
  for (let i = 0; i < max5kg; i++) {
    cur3kg = (sugar - i * 5) / 3;
    bags.push(cur3kg + i);
  }
  for (let i = 0; i < max3kg; i++) {
    cur5kg = (sugar - i * 3) / 5;
    bags.push(cur5kg + i);
  }
  bags = bags.filter((x) => x % 1 === 0);
  return bags.length ? Math.min(...bags) : -1;
};

console.log(howManyBags(+input));
