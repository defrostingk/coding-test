const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const testCaseNum = input[0];
const testCase = input.slice(1, testCaseNum * 2 + 1);

const getResidentsNum = (floor, room) => {
  let lowerFloorResident = [];
  let currentFloorResident = [];
  let zeroArr = [];
  for (let i = 0; i < room; i++) {
    lowerFloorResident.push(1);
    currentFloorResident.push(0);
    zeroArr.push(0);
  }

  for (let i = 0; i < floor + 1; i++) {
    for (let j = 0; j < room; j++) {
      for (let k = 0; k < j + 1; k++) {
        currentFloorResident[j] += lowerFloorResident[k];
      }
    }
    for (j = 0; j < room; j++) {
      lowerFloorResident[j] = currentFloorResident[j];
      currentFloorResident[j] = 0;
    }
  }
  return lowerFloorResident[room - 1];
};

for (let i = 0; i < testCaseNum * 2; i += 2) {
  console.log(getResidentsNum(testCase[i], testCase[i + 1]));
}
