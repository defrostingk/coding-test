const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const [n, m] = input[0].split(' ').map(Number);
  const arrA = input[1].split(' ').map(Number);
  const arrB = input[2].split(' ').map(Number);

  const result = new Array(n + m);
  let idxA = 0;
  let idxB = 0;
  for (let i = 0; i < result.length; i++) {
    if (arrA[idxA] >= arrB[idxB]) result[i] = arrB[idxB++];
    else if (idxA === n) result[i] = arrB[idxB++];
    else if (arrA[idxA] < arrB[idxB]) result[i] = arrA[idxA++];
    else if (idxB === m) result[i] = arrA[idxA++];
  }

  console.log(result.join(' '));
}
