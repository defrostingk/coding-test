const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [height, width] = input[0].split(' ').map(Number);

const originalMatrix = input
  .slice(1, height + 1)
  .map((column) => column.split(''));
const resultMatrix = input.slice(height + 1).map((column) => column.split(''));

console.log(getMinOperations(height, width, originalMatrix, resultMatrix));

function getMinOperations(height, width, originalMatrix, resultMatrix) {
  if (width < 3 && height < 3) return isMatrixMatched() ? 0 : -1;

  let cnt = 0;
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 2; x++) {
      if (!isElementMatched(y, x)) {
        reverseMatrix(y, x);
        cnt++;
      }
    }
  }

  return isMatrixMatched() ? cnt : -1;

  function reverseMatrix(startHeight, startWidth) {
    for (let y = startHeight; y < startHeight + 3; y++) {
      for (let x = startWidth; x < startWidth + 3; x++) {
        originalMatrix[y][x] = originalMatrix[y][x] === '0' ? '1' : '0';
      }
    }
  }

  function isElementMatched(y, x) {
    return originalMatrix[y][x] === resultMatrix[y][x];
  }

  function isMatrixMatched() {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (originalMatrix[y][x] !== resultMatrix[y][x]) return false;
      }
    }
    return true;
  }
}
