const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(/\s/).map(Number));

const [n, s] = input[0];
const locationOfYounger = input[1];

const getGCDOf = (intA, intB) => {
  return intB ? getGCDOf(intB, intA % intB) : intA;
};

const getDiffLocations = (subin, younger) => {
  const diffLocations = [];
  for (let i = 0; i < younger.length; i++) {
    diffLocations.push(Math.abs(subin - younger[i]));
  }
  return diffLocations;
};

const getGCDOfDiffLocations = (diffLocations) => {
  let GCD = diffLocations[0];
  for (let i = 1; i < diffLocations.length; i++) {
    GCD = getGCDOf(GCD, diffLocations[i]);
  }
  return GCD;
};
console.log(getGCDOfDiffLocations(getDiffLocations(s, locationOfYounger)));
