const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

input.shift();
const data = input;

// 크기를 기준으로 개수를 센다.
const countingSort = (data) => {
  const { length } = data;
  const max = Math.max.apply(null, data);
  let cntArr = new Array(max);
  let sortedData = [];

  // 개수를 세는 배열을 초기화
  for (let i = 0; i < max; i++) cntArr[i] = 0;
  // 각 데이터의 개수를 센다.
  for (let i = 0; i < length; i++) cntArr[data[i] - 1]++;
  // 개수를 센 배열을 이용하여 정렬된 배열을 만든다.
  for (let i = 0; i < max; i++)
    if (cntArr[i]) for (let j = 0; j < cntArr[i]; j++) sortedData.push(i + 1);

  return sortedData;
};

const printSortedData = (data, sortFunction) => {
  console.log(
    sortFunction(data)
      .reduce((acc, cur) => (acc += `${cur}\n`), "")
      .trim()
  );
  return;
};

printSortedData(data, countingSort);
