const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const testDataNum = +input[0];
const testData = input
  .slice(1, testDataNum + 1)
  .map((x) => x.split(/\s+/).map((x) => +x));

const solution = (height, nthGuest) => {
  let floorNum, roomNum, room;
  floorNum =
    nthGuest % height === 0 ? String(height) : String(nthGuest % height);
  roomNum = Math.ceil(nthGuest / height);
  roomNum = roomNum < 10 ? "0" + String(roomNum) : String(roomNum);
  room = floorNum + roomNum;
  console.log(room);
};

testData.forEach((data) => {
  solution(data[0], data[2]);
});
