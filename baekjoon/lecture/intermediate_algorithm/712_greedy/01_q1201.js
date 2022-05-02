const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

solution(input);

function solution(input) {
  const [n, m, k] = input;

  //
  // 가장 긴 감소하는 부분 수열의 길이가 K
  // -> 최대 K개의 원소를 가지며 적어도 하나는 K개의 원소를 가지도록
  // -> 모든 수열을 reverse 상태의

  // 가장 긴 증가하는 부분 수열의 길이가 M
  // -> M개로 나눈다.

  // 1. 감소 수열과 증가 수열의 겹치는 부분이 적어도 하나
  // 2. 최대 k개의 원소를 가지는 m개의 부분수열
  // 둘 중 하나를 만족하지 못할 경우
  if (n < m + k - 1 || n > m * k) {
    console.log(-1);
    return;
  }

  const sequence = Array.from(Array(n), (v, i) => (v = i + 1));
  const result = [sequence.slice(0, k)];
  const sliced = sequence.slice(k);

  const partLength = [];
  let partCnt = 0;
  while (partCnt < m - 1) {
    partLength.push(0);
    partCnt++;
  }

  let slicedLength = sliced.length;
  while (slicedLength) {
    for (let i = 0; i < partLength.length; i++) {
      partLength[i]++;
      slicedLength--;
      if (slicedLength <= 0) break;
    }
  }

  let preIdx = 0;
  let idx = 0;
  for (let i = 0; i < partLength.length; i++) {
    idx += partLength[i];
    result.push(sliced.slice(preIdx, idx));
    preIdx = idx;
  }

  console.log(
    result
      .map((v) => v.reverse())
      .flat()
      .join(' ')
  );
}
