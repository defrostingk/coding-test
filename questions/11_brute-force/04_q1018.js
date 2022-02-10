const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(/\s+/)
  .map((x) => +x);

const board = input;

const getCutBoard = (y, x, board) => {
  let cutBoard = [];
  for (let k = 0; k < 8; k++) {
    cutBoard.push(board[y + k].slice(x, x + 8));
  }
  return cutBoard;
};

const countFillSquare = (line, lineNum, startWithBorW) => {
  let cnt = 0;
  if (startWithBorW === "W") lineNum++;
  // B로 시작하는 경우 그대로 실행,
  // W로 시작하는 경우 아래 조건문을 반대로 실행.

  // 0, 2, 4, 6 열 B로 시작, 1, 3, 5, 7 열 W로 시작
  // W로 시작하는 1, 3, 5, 7 열의 경우
  if (lineNum % 2) {
    for (let i = 0; i < 8; i++) {
      if (i % 2) cnt += line[i] === "B" ? 0 : 1;
      else cnt += line[i] === "W" ? 0 : 1;
    }
    // B로 시작하는 0, 2, 4, 6 열의 경우
  } else {
    for (let i = 0; i < 8; i++) {
      if (i % 2) cnt += line[i] === "B" ? 1 : 0;
      else cnt += line[i] === "W" ? 1 : 0;
    }
  }
  return cnt;
};

const getMinFillSquare = (height, width, board) => {
  let cutBoard = [];
  let squareNum = [];
  let cnt = 0;
  for (let i = 0; i < height - 7; i++) {
    for (let j = 0; j < width - 7; j++) {
      cutBoard = getCutBoard(i, j, board);
      // cutBoard 이용해서 다시 칠해야하는 정사각형 갯수 계산->arr에 push
      cnt = 0;
      cutBoard.forEach(
        (line, lineNum) => (cnt += countFillSquare(line, lineNum, "B"))
      );
      squareNum.push(cnt);
      cnt = 0;
      cutBoard.forEach(
        (line, lineNum) => (cnt += countFillSquare(line, lineNum, "W"))
      );
      squareNum.push(cnt);
    }
  }
  return Math.min.apply(null, squareNum);
};

console.log(getMinFillSquare(n, m, board));
