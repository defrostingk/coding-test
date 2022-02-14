const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();
const xs = input
  .shift()
  .split(/\s+/)
  .map((x) => +x);

// 중복제거
// 오름차순 정렬했을 때 idx가 압축좌표 => obj로 생성
// 원래의 배열 원소값을 key로 obj의 value를 push

const getCompressedXs = (xs) => {
  const removedDuplicates = [...new Set([...xs])];
  const compressedXsTable = removedDuplicates.sort((a, b) => a - b);
  const compressedXsObj = {};
  const compressedXs = [];

  compressedXsTable.forEach((x, xIdx) => {
    compressedXsObj[x] = xIdx;
  });
  xs.forEach((x) => compressedXs.push(compressedXsObj[x]));

  return compressedXs;
};

console.log(getCompressedXs(xs).join(" "));
