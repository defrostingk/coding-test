const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const joy = input.slice(1).map((column) => column.split(' ').map(Number));

  const result = [];

  if (height % 2) {
    rrdlld(0, height);
    result.pop();
  } else if (width % 2) {
    for (let x = 0; x < width; x++) {
      if (x % 2) {
        for (let y = 0; y < height - 1; y++) {
          result.push('U');
        }
      } else {
        for (let y = 0; y < height - 1; y++) {
          result.push('D');
        }
      }
      result.push('R');
    }
    result.pop();
  } else {
    const minCoordinates = getMinCoordinates();
    const refY = minCoordinates.y % 2 ? minCoordinates.y - 1 : minCoordinates.y;
    const refX = minCoordinates.x % 2 ? minCoordinates.x - 1 : minCoordinates.x;
    rrdlld(0, refY);

    for (let x = 0; x < refX; x++) {
      if (x % 2) {
        result.push('U');
      } else {
        result.push('D');
      }
      result.push('R');
    }

    if (minCoordinates.x % 2) {
      result.push('D');
      result.push('R');
    } else {
      result.push('R');
      result.push('D');
    }
    result.push('R');

    for (let x = refX + 2; x < width; x++) {
      if (x % 2) {
        result.push('D');
      } else {
        result.push('U');
      }
      result.push('R');
    }

    result.pop();

    if (minCoordinates.x === width - 2) {
      if (!(minCoordinates.x % 2)) result.pop();
      result.push('D');
    }

    for (let y = refY + 2; y < height; y++) {
      if (y === refY + 2) result.push('D');
      if (!(y % 2)) {
        for (let x = 0; x < width - 1; x++) {
          result.push('L');
        }
      } else {
        for (let x = 0; x < width - 1; x++) {
          result.push('R');
        }
      }
      result.push('D');
      if (y === height - 1) result.pop();
    }
  }

  console.log(result.join(''));

  function getMinCoordinates() {
    let min = 1000;
    const minCoordinates = { x: 0, y: height - 1 };
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (((y % 2 && !(x % 2)) || (!(y % 2) && x % 2)) && min > joy[y][x]) {
          min = joy[y][x];
          minCoordinates.x = x;
          minCoordinates.y = y;
        }
      }
    }

    return minCoordinates;
  }

  function rrdlld(start, end) {
    for (let y = start; y < end; y++) {
      if (y % 2) {
        for (let x = 0; x < width - 1; x++) {
          result.push('L');
        }
      } else {
        for (let x = 0; x < width - 1; x++) {
          result.push('R');
        }
      }
      result.push('D');
    }
  }
})(input);
