const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

solution(input);

function solution(input) {
  const numbers = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const target = input[3].split(' ').map(Number);

  console.log(target.map((number) => binarySearch(number, numbers)).join(' '));

  function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (target > arr[mid]) start = mid + 1;
      else if (target < arr[mid]) end = mid - 1;
      else return 1;
    }
    return 0;
  }
}
