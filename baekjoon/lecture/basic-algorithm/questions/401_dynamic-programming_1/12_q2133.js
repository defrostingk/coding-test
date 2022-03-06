const fs = require("fs");
const width = +fs.readFileSync("../input.txt").toString().trim();

function cntTilesFilling(width) {
  if (width % 2 === 1) {
    return 0;
  }
  let idx;
  let tiles = new Array(width + 1);
  tiles[0] = 1;
  tiles[2] = 3;

  for (let i = 4; i < width + 1; i += 2) {
    tiles[i] = tiles[i - 2] * tiles[2];
    idx = i - 4;
    while (idx >= 0) {
      tiles[i] += tiles[idx] * 2;
      idx -= 2;
    }
  }

  return tiles[width];
}

function printCntTilesFilling() {
  console.log(cntTilesFilling(width));
}

printCntTilesFilling();
