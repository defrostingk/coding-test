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
if (numIdx > numCenter) {
  numerator = 2 * numCenter - numIdx;
} else if (numIdx <= numCenter) {
  numerator = numIdx;
}

while (input > denominator) {
  denRange = 4 * denStage + 3;
  denStage++;
  denominator += denRange;
}

denIdx = denominator - input + 1;
denCenter = 2 * denStage;
if (denIdx > denCenter) {
  denominator = 2 * denCenter - denIdx;
} else if (denIdx <= denCenter) {
  denominator = denIdx;
}

console.log(`${numerator}/${denominator}`);

// 1:   1/1
// 2:   1/2
// 3:   2/1
// 4:   3/1
// 5:   2/2
// 6:   1/3
// 7:   1/4
// 8:   2/3
// 9:   3/2
// 10:  4/1
// 11:  5/1
// 12:  4/2
// 13:  3/3
// 14:  2/4
// 15:  1/5
// 16:  1/6
// 15:  2/5
//
//
// 분자: 1, 12321, 123454321, 1234567654321, ...
// 분모: 121, 1234321, 12345654321, 123456787654321, ...
//
// 1, 5, 9, 13, 17, ...
// 분자 중앙값: 2n - 1
//
// 3, 7, 11, 15, 19, ...
// 분모 중앙값: 2n
//
// 13, 13 / 4 = 3 .. 1
