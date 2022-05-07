// const rc = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const operations = ['Rotate', 'ShiftRow'];

const rc = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const operations = ['ShiftRow', 'Rotate', 'ShiftRow', 'Rotate'];

console.log(solution(rc, operations).join('\n'));

function solution(rc, operations) {
  operations.forEach((op) => {
    if (op === 'Rotate') {
      rotate();
    } else {
      shiftRow();
    }
  });

  return rc;

  function rotate() {
    const width = rc[0].length;
    const height = rc.length;
    const leftTop = rc[0][0];
    const rightBottom = rc[height - 1][width - 1];

    for (let y = 0; y < height - 1; y++) {
      rc[y][0] = rc[y + 1][0];
      rc[height - 1 - y][width - 1] = rc[height - 2 - y][width - 1];
    }
    for (let x = 0; x < width - 2; x++) {
      rc[height - 1][x] = rc[height - 1][x + 1];
      rc[0][width - 1 - x] = rc[0][width - 2 - x];
    }
    rc[0][1] = leftTop;
    rc[height - 1][width - 2] = rightBottom;
  }
  function shiftRow() {
    let tmp = rc.pop();
    rc.unshift(tmp);
  }
}
