const fs = require("fs");
const input = +fs.readFileSync("../input.txt").toString().trim();

let numerator = 0,
  denominator = 0,
  numStage = 0,
  denStage = 0,
  numRange,
  denRange,
  numCenter,
  denCenter,
  numIdx,
  denIdx;

while (input > numerator) {
  numRange = 4 * numStage + 1;
  numStage++;
  numerator += numRange;
}

numIdx = numerator - input + 1;
numCenter = 2 * numStage - 1;
numerator = numIdx > numCenter ? 2 * numCenter - numIdx : numIdx;

while (input > denominator) {
  denRange = 4 * denStage + 3;
  denStage++;
  denominator += denRange;
}

denIdx = denominator - input + 1;
denCenter = 2 * denStage;
denominator = denIdx > denCenter ? 2 * denCenter - denIdx : denIdx;

console.log(`${numerator}/${denominator}`);
