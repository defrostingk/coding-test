const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

input.shift();
const data = input;

// 산술평균
const getAverage = (data) => {
  return Math.round(data.reduce((acc, cur) => (acc += cur), 0) / data.length);
};

// 중앙값: 오름차순 정렬 후 중앙값
const getMedian = (data) => {
  return data.sort((a, b) => a - b)[Math.floor(data.length / 2)];
};

// 최빈값 (여러 개일 경우 두 번째로 작은 값을 출력)
const getMode = (data) => {
  const { length } = data;
  const min = Math.min.apply(null, data);
  const max = Math.max.apply(null, data);
  let modeArr = [];

  if (max >= 0 && min >= 0) {
    const cntArrSize = max + 1;
    let cntArr = new Array(cntArrSize);
    for (let i = 0; i < cntArrSize; i++) cntArr[i] = 0;
    for (let i = 0; i < length; i++) cntArr[data[i]]++;
    const cntMax = Math.max.apply(null, cntArr);
    for (let i = 0; i < cntArrSize; i++)
      if (cntArr[i] === cntMax) modeArr.push(i);
  } else if (max >= 0 && min < 0) {
    const cntArrSize = max - min + 1;
    let cntArr = new Array(cntArrSize);
    for (let i = 0; i < cntArrSize; i++) cntArr[i] = 0;
    for (let i = 0; i < length; i++) cntArr[data[i] - min]++;
    const cntMax = Math.max.apply(null, cntArr);
    for (let i = 0; i < cntArrSize; i++)
      if (cntArr[i] === cntMax) modeArr.push(i + min);
  } else {
    const cntArrSize = 1 - min;
    let cntArr = new Array(cntArrSize);
    for (let i = 0; i < cntArrSize; i++) cntArr[i] = 0;
    for (let i = 0; i < length; i++) cntArr[0 - data[i]]++;
    const cntMax = Math.max.apply(null, cntArr);
    for (let i = 0; i < cntArrSize; i++)
      if (cntArr[i] === cntMax) modeArr.push(0 - i);
  }

  if (modeArr.length === 1) return modeArr[0];
  else {
    return modeArr.sort((a, b) => a - b)[1];
  }
};

// 범위: 최댓값과 최솟값의 차이
const getRange = (data) => {
  return Math.max.apply(null, data) - Math.min.apply(null, data);
};

console.log(
  `${getAverage(data)}\n${getMedian(data)}\n${getMode(data)}\n${getRange(data)}`
);
