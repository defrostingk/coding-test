function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

  const n = +input[0];
  const sequence = input[1].split(' ').map(Number);

  const maxLength = [sequence[0]];
  for (let i = 1; i < n; i++) {
    if (maxLength[maxLength.length - 1] < sequence[i]) {
      maxLength.push(sequence[i]);
    } else {
      const idx = binarySearch(sequence[i], maxLength);
      maxLength[idx] = sequence[i];
    }
  }

  console.log(maxLength.length);

  function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (target === arr[mid]) return mid;
      target > arr[mid] ? (start = mid + 1) : (end = mid);
    }
    return start;
  }
}

solution();
