const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

input.shift();
const data = input;
let sortedData = new Array(data.length);

// 반으로 분할하고, 정렬 후 다시 합친다.
const merge = (data, startIdx, middleIdx, endIdx) => {
  let i = startIdx;
  let j = middleIdx + 1;
  let k = startIdx;
  // 작은 순서대로 배열에 삽입
  while (i <= middleIdx && j <= endIdx) {
    if (data[i] <= data[j]) {
      sortedData[k] = data[i];
      i++;
    } else {
      sortedData[k] = data[j];
      j++;
    }
    k++;
  }
  // 남은 데이터를 삽입
  // 분할한 앞 데이터의 정렬이 먼저 끝났을 때, 뒤 데이터 삽입.
  if (i > middleIdx) {
    for (let t = j; t <= endIdx; t++) {
      sortedData[k] = data[t];
      k++;
    }
    // 분할한 뒷 데이터의 정렬이 먼저 끝났을 때, 앞 데이터 삽입.
  } else {
    for (let t = i; t <= middleIdx; t++) {
      sortedData[k] = data[t];
      k++;
    }
  }
  // 정렬된 배열을 원래 배열에 삽입 (정렬된 배열을 합친다.)
  for (let t = startIdx; t <= endIdx; t++) {
    data[t] = sortedData[t];
  }
};

const mergeSort = (data, startIdx, endIdx) => {
  // 크기가 1보다 큰 경우
  if (startIdx < endIdx) {
    // 데이터의 개수가 짝수일 때 고려. (0+odd)/2 = xx.5
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSort(data, startIdx, middleIdx);
    mergeSort(data, middleIdx + 1, endIdx);
    merge(data, startIdx, middleIdx, endIdx);
  }
  return data;
};

const heapSortBottomUp = (data) => {
  let tmp, child, root;
  let { length } = data;
  // 데이터 구조를 최대 heap 구조로 변경
  for (let i = 1; i < length; i++) {
    child = i;
    do {
      root = Math.floor((child - 1) / 2);
      if (data[root] < data[child]) {
        tmp = data[root];
        data[root] = data[child];
        data[child] = tmp;
      }
      child = root;
    } while (child != 0);
  }

  //
  for (let i = length - 1; i >= 0; i--) {
    // 가장 큰 값을 맨 뒤로 보내고
    tmp = data[0];
    data[0] = data[i];
    data[i] = tmp;
    // 정렬된 heap을 생성
    root = 0;
    do {
      child = 2 * root + 1;
      // child 중 더 큰 값을 찾는다.
      if (child < i - 1 && data[child] < data[child + 1]) {
        child++;
      }
      // root 보다 child가 더 크면 교환
      if (child < i && data[root] < data[child]) {
        tmp = data[root];
        data[root] = data[child];
        data[child] = tmp;
      }
      root = child;
    } while (child < i);
  }

  return data;
};

const heapSortTopDown = (data) => {};

const printSortedData = (data, sortFunction) => {
  if (sortFunction === mergeSort) {
    let startIdx = 0;
    let endIdx = data.length - 1;
    console.log(
      sortFunction(data, startIdx, endIdx)
        .reduce((acc, cur) => (acc += `${cur}\n`), "")
        .trim()
    );
    return;
  }
  console.log(
    sortFunction(data)
      .reduce((acc, cur) => (acc += `${cur}\n`), "")
      .trim()
  );
  return;
};

printSortedData(data, heapSortBottomUp);
