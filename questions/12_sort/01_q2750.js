const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

input.shift();
const data = input;

// 가장 작은 것을 선택하여 제일 앞으로 보낸다.
// O(N*N)
const selectionSort = (data) => {
  let min = 1001;
  let minIdx;
  let tmp;
  const { length } = data;

  for (let i = 0; i < length; i++) {
    min = 1001;
    for (j = i; j < length; j++) {
      if (min > data[j]) {
        min = data[j];
        minIdx = j;
      }
    }
    tmp = data[i];
    data[i] = min;
    data[minIdx] = tmp;
  }

  return data;
};

// 옆에 있는 값과 비교하여 더 작은 값을 앞으로 보낸다.
// =>가장 큰 값을 뒤로 보내는 것을 반복한다.
// O(N*N)
const bubbleSort = (data) => {
  let tmp;
  const { length } = data;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }

  return data;
};

// 각 데이터를 적절한 위치에 삽입한다. (필요할 때만)
// O(N*N)
const insertionSort = (data) => {
  let tmp;
  const { length } = data;

  for (let i = 0; i < length - 1; i++) {
    let j = i;
    while (data[j] > data[j + 1]) {
      tmp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = tmp;
      j--;
      if (j < 0) break;
    }
  }

  return data;
};

// 특정한 값(key)을 기준으로 큰 숫자와 작은 숫자를 서로 교환하고,
// 배열을 반으로 나눈다.
// O(N*log_2(N))
const quickSort = (data, startIdx, endIdx) => {
  if (startIdx >= endIdx) {
    return data;
  }
  let keyIdx = startIdx; // 첫 번째 key는 start
  let tmp;
  let i = startIdx + 1; // key 다음부터 탐색
  let j = endIdx; // end 부터 탐색

  while (i <= j) {
    // 각각의 탐색이 교차할 때까지 (더 탐색할 데이터가 없을 때까지)
    while (data[i] <= data[keyIdx] && i <= endIdx) {
      // key 값보다 큰 값을 만날 때까지
      i++;
    }
    while (data[j] >= data[keyIdx] && j > startIdx) {
      // key 값보다 작은 값을 만날 때까지
      j--;
    }
    if (i > j) {
      // 엇갈렸다면 키 값과 j를 교체
      tmp = data[j];
      data[j] = data[keyIdx];
      data[keyIdx] = tmp;
    } else {
      // 엇갈리지 않았다면 i와 j를 교체
      tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    }
    quickSort(data, startIdx, j - 1); // key를 기준으로 왼쪽을 정렬
    quickSort(data, j + 1, endIdx); // key를 기준으로 오른쪽을 정렬
  }

  return data;
};

const printSortedData = (data, sortFunction) => {
  if (sortFunction === quickSort) {
    console.log(
      sortFunction(data, 0, data.length - 1)
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

printSortedData(data, quickSort);
