const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const [height, width] = input[0].split(' ').map(Number);
  const joy = input.slice(1).map((column) => column.split(' ').map(Number));

  const result = [];

  // height가 홀수
  if (height % 2) {
    rrdlld();
  }
  // width가 홀수
  else if (width % 2) {
    ddruur();
  }
  //height, width 모두 짝수
  else {
    // 최솟값 좌표 찾기
    let min = 1000;
    let minCoordinates = { x: 0, y: height - 1 };
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (((y % 2 && !(x % 2)) || (!(y % 2) && x % 2)) && min > joy[y][x]) {
          min = joy[y][x];
          minCoordinates.x = x;
          minCoordinates.y = y;
        }
      }
    }
    const refY = minCoordinates.y % 2 ? minCoordinates.y - 1 : minCoordinates.y;
    const refX = minCoordinates.x % 2 ? minCoordinates.x - 1 : minCoordinates.x;

    // 최솟값 좌표 윗줄까지
    for (let y = 0; y < refY; y++) {
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

    // 최솟값 좌표 전까지
    for (let x = 0; x < refX; x++) {
      if (x % 2) {
        result.push('UR');
      } else {
        result.push('DR');
      }
    }

    // 최솟값 좌표에서
    if (minCoordinates.x % 2) {
      result.push('DR');
      result.push('R');
    } else {
      result.push('R');
      result.push('DR');
    }

    // 최솟값 좌표 이후
    for (let x = refX + 2; x < width; x++) {
      if (x % 2) {
        result.push('D');
        result.push('R');
      } else {
        result.push('U');
        result.push('R');
      }
    }

    result.pop();

    if (minCoordinates.x === width - 2) {
      result.push('D');
    }

    // 최솟값 좌표 다음줄부터
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

  function ddruur() {
    let widthCnt = 1;
    let heightCnt = 1;
    while (widthCnt < width || heightCnt < height) {
      while (heightCnt < height) {
        result.push('D');
        heightCnt++;
      }
      if (widthCnt >= width && heightCnt >= height) break;
      result.push('R');
      widthCnt++;
      if (widthCnt >= width && heightCnt >= height) break;
      while (heightCnt > 1) {
        result.push('U');
        heightCnt--;
      }
      result.push('R');
      widthCnt++;
    }
  }

  function rrdlld() {
    let widthCnt = 1;
    let heightCnt = 1;
    while (widthCnt < width || heightCnt < height) {
      while (widthCnt < width) {
        result.push('R');
        widthCnt++;
      }
      if (widthCnt >= width && heightCnt >= height) break;
      result.push('D');
      heightCnt++;
      if (widthCnt >= width && heightCnt >= height) break;
      while (widthCnt > 1) {
        result.push('L');
        widthCnt--;
      }
      result.push('D');
      heightCnt++;
    }
  }
})(input);
