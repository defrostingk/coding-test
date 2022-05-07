const fs = require("fs");
const [a, b] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const getGCD = (intA, intB) => {
  let GCD;
  if (intA > intB) GCD = intB;
  else GCD = intA;
  while (intA % GCD !== 0 || intB % GCD !== 0) {
    GCD--;
  }
  return GCD;
};

const getLCM = (intA, intB) => {
  return (intA * intB) / getGCD(intA, intB);
};

console.log(getGCD(a, b));
console.log(getLCM(a, b));
