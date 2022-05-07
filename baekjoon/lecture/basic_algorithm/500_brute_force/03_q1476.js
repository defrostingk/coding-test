const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const esm = input;

function esmToYear(esm) {
  const MAX_EARTH = 15;
  const MAX_SUN = 28;
  const MAX_MOON = 19;
  let [earth, sun, moon] = esm;
  let counter = 0;
  let year = MAX_SUN * counter + sun;

  while ((year - earth) % MAX_EARTH !== 0 || (year - moon) % MAX_MOON !== 0) {
    year = MAX_SUN * counter++ + sun;
  }

  return year;
}

function printYear(esm) {
  console.log(esmToYear(esm));
}

printYear(esm);
