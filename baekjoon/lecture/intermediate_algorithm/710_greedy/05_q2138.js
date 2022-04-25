const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

console.log(getMinClicks());

function getMinClicks() {
  const bulbs = +input[0];
  const bulbsCurrent = input[1].split('').map(Number);
  const bulbsClicked = input[1].split('').map(Number);
  const bulbsTarget = input[2].split('').map(Number);
  let cnt = 0;
  let cntClicked = 1;

  clickSwitch(0, bulbsClicked);
  for (let i = 1; i < bulbs; i++) {
    if (bulbsCurrent[i - 1] !== bulbsTarget[i - 1]) {
      clickSwitch(i, bulbsCurrent);
      cnt++;
    }
    if (bulbsClicked[i - 1] !== bulbsTarget[i - 1]) {
      clickSwitch(i, bulbsClicked);
      cntClicked++;
    }
  }

  return isMatch(bulbsCurrent) && isMatch(bulbsClicked)
    ? Math.min(cnt, cntClicked)
    : isMatch(bulbsCurrent)
    ? cnt
    : isMatch(bulbsClicked)
    ? cntClicked
    : -1;

  function clickSwitch(switchNum, bulbsArr) {
    if (switchNum === 0) {
      bulbsArr[switchNum + 1] = 1 - bulbsArr[switchNum + 1];
    } else if (switchNum === bulbs - 1) {
      bulbsArr[switchNum - 1] = 1 - bulbsArr[switchNum - 1];
    } else {
      bulbsArr[switchNum - 1] = 1 - bulbsArr[switchNum - 1];
      bulbsArr[switchNum + 1] = 1 - bulbsArr[switchNum + 1];
    }
    bulbsArr[switchNum] = 1 - bulbsArr[switchNum];
  }

  function isMatch(bulbsArr) {
    for (let i = 0; i < bulbs; i++) {
      if (bulbsArr[i] !== bulbsTarget[i]) return false;
    }
    return true;
  }
}
