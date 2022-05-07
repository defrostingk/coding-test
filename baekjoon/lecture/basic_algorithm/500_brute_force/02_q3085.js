const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(/\s/);
const boardSize = +input.shift();
const board = input;

function getMaxRow(board) {
  const { length } = board;
  let cnt = 0;
  let max = 0;
  let color;

  for (let i = 0; i < length; i++) {
    color = board[i][0];
    cnt = 0;
    for (let j = 0; j < length; j++) {
      if (color === board[i][j]) {
        cnt++;
      } else {
        max = Math.max(cnt, max);
        color = board[i][j];
        cnt = 1;
      }
    }
    max = Math.max(cnt, max);
  }

  return max;
}

function getMaxColumn(board) {
  const { length } = board;
  let cnt = 0;
  let max = 0;
  let color;

  for (let i = 0; i < length; i++) {
    color = board[0][i];
    cnt = 0;
    for (let j = 0; j < length; j++) {
      if (color === board[j][i]) {
        cnt++;
      } else {
        max = Math.max(max, cnt);
        color = board[j][i];
        cnt = 1;
      }
    }
    max = Math.max(max, cnt);
  }

  return max;
}

function getMaxRowAndColumn(max, board) {
  return Math.max(max, getMaxRow(board), getMaxColumn(board));
}

function swapIn2DimArray(array, idx1A, idx1B, idx2A, idx2B) {
  let tmp = array[idx1A][idx1B];
  array[idx1A][idx1B] = array[idx2A][idx2B];
  array[idx2A][idx2B] = tmp;
}

function getMaxCandies(board) {
  const { length } = board;
  let splitBoard = Array.from(board).map((row) => row.split(""));
  let max = 0;

  // 열 간 교환
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      swapIn2DimArray(splitBoard, i, j, i, j + 1);
      max = getMaxRowAndColumn(max, splitBoard);
      swapIn2DimArray(splitBoard, i, j, i, j + 1);
    }
  }
  // 행 간 교환
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length; j++) {
      swapIn2DimArray(splitBoard, i, j, i + 1, j);
      max = getMaxRowAndColumn(max, splitBoard);
      swapIn2DimArray(splitBoard, i, j, i + 1, j);
    }
  }

  return max;
}

function printMaxCandies(board) {
  console.log(getMaxCandies(board));
}

printMaxCandies(board);
