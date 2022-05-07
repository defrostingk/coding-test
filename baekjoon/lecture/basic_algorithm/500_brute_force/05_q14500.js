const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [height, width] = input.shift().split(/\s/).map(Number);
const board = input.map((v) => v.split(/\s/).map(Number));

printMaxSumOfTetromino(board);

function printMaxSumOfTetromino(board) {
  console.log(getMaxSumOfTetrominos(board));
}

function getMaxSumOfTetrominos(board) {
  return Math.max(
    getTetrominoStraight(board),
    getTetrominoSquare(board),
    getTetrominoL(board),
    getTetrominoSkew(board),
    getTetrominoT(board)
  );
}

function getTetrominoStraight(board) {
  let sum = 0;
  let max = 0;
  // horizontal
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width - 3; x++) {
      sum = board[y][x] + board[y][x + 1] + board[y][x + 2] + board[y][x + 3];
      max = Math.max(sum, max);
    }
  }
  // vertical
  for (let y = 0; y < height - 3; y++) {
    for (let x = 0; x < width; x++) {
      sum = board[y][x] + board[y + 1][x] + board[y + 2][x] + board[y + 3][x];
      max = Math.max(sum, max);
    }
  }

  return max;
}
function getTetrominoSquare(board) {
  let sum = 0;
  let max = 0;
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x] + board[y + 1][x] + board[y][x + 1] + board[y + 1][x + 1];
      max = Math.max(sum, max);
    }
  }

  return max;
}
function getTetrominoL(board) {
  let sum = 0;
  let max = 0;
  // ㅁ
  // ㅁ
  // ㅁㅁ
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x] + board[y + 1][x] + board[y + 2][x] + board[y + 2][x + 1];
      max = Math.max(sum, max);
    }
  }

  //   ㅁ
  //   ㅁ
  // ㅁㅁ
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x + 1] +
        board[y + 1][x + 1] +
        board[y + 2][x] +
        board[y + 2][x + 1];
      max = Math.max(sum, max);
    }
  }

  // ㅁㅁㅁ
  // ㅁ
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum = board[y][x] + board[y][x + 1] + board[y][x + 2] + board[y + 1][x];
      max = Math.max(sum, max);
    }
  }

  // ㅁㅁㅁ
  //     ㅁ
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x] + board[y][x + 1] + board[y][x + 2] + board[y + 1][x + 2];
      max = Math.max(sum, max);
    }
  }

  // ㅁㅁ
  //   ㅁ
  //   ㅁ
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x] +
        board[y][x + 1] +
        board[y + 1][x + 1] +
        board[y + 2][x + 1];
      max = Math.max(sum, max);
    }
  }

  // ㅁㅁ
  // ㅁ
  // ㅁ
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum = board[y][x] + board[y][x + 1] + board[y + 1][x] + board[y + 2][x];
      max = Math.max(sum, max);
    }
  }

  //     ㅁ
  // ㅁㅁㅁ
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x + 2] +
        board[y + 1][x] +
        board[y + 1][x + 1] +
        board[y + 1][x + 2];
      max = Math.max(sum, max);
    }
  }

  // ㅁ
  // ㅁㅁㅁ
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x] +
        board[y + 1][x] +
        board[y + 1][x + 1] +
        board[y + 1][x + 2];
      max = Math.max(sum, max);
    }
  }

  return max;
}
function getTetrominoSkew(board) {
  let sum = 0;
  let max = 0;
  // vertical
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x] +
        board[y + 1][x] +
        board[y + 1][x + 1] +
        board[y + 2][x + 1];
      max = Math.max(sum, max);
    }
  }
  // vertical (reverse)
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x + 1] +
        board[y + 1][x] +
        board[y + 1][x + 1] +
        board[y + 2][x];
      max = Math.max(sum, max);
    }
  }

  // horizontal
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x + 1] +
        board[y][x + 2] +
        board[y + 1][x] +
        board[y + 1][x + 1];
      max = Math.max(sum, max);
    }
  }

  // horizontal (reverse)
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x] +
        board[y][x + 1] +
        board[y + 1][x + 1] +
        board[y + 1][x + 2];
      max = Math.max(sum, max);
    }
  }

  return max;
}
function getTetrominoT(board) {
  let sum = 0;
  let max = 0;

  // down
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x] + board[y][x + 1] + board[y][x + 2] + board[y + 1][x + 1];
      max = Math.max(sum, max);
    }
  }

  // left
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x + 1] +
        board[y + 1][x] +
        board[y + 1][x + 1] +
        board[y + 2][x + 1];
      max = Math.max(sum, max);
    }
  }

  // up
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 2; x++) {
      sum =
        board[y][x + 1] +
        board[y + 1][x] +
        board[y + 1][x + 1] +
        board[y + 1][x + 2];
      max = Math.max(sum, max);
    }
  }

  // right
  for (let y = 0; y < height - 2; y++) {
    for (let x = 0; x < width - 1; x++) {
      sum =
        board[y][x] + board[y + 1][x] + board[y + 1][x + 1] + board[y + 2][x];
      max = Math.max(sum, max);
    }
  }

  return max;
}
