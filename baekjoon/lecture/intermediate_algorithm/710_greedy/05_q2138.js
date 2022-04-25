const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

console.log(getMinClicks());

function getMinClicks() {
  const bulbs = +input[0];
  const bulbsCurrent = input[1].split('');
  const bulbsClicked = input[1].split('');
  const bulbsTarget = input[2];
  let cnt = 0;
  let cntClicked = 1;

  for (let i = 1; i < bulbs; i++) {
    if (!isMatch(i - 1, bulbsCurrent)) {
      clickSwitch(i, bulbsCurrent);
      cnt++;
    }
  }
  if (isMatch(bulbs - 1, bulbsCurrent)) return cnt;

  clickSwitch(0, bulbsClicked);
  for (let i = 1; i < bulbs; i++) {
    if (!isMatch(i - 1, bulbsClicked)) {
      clickSwitch(i, bulbsClicked);
      cntClicked++;
    }
  }

  return isMatch(bulbs - 1, bulbsClicked) ? cntClicked : -1;

  function clickSwitch(switchNum, bulbsArr) {
    if (switchNum < bulbs - 1) {
      toggleBulb(switchNum + 1, bulbsArr);
    }
    if (switchNum > 1) {
      toggleBulb(switchNum - 1, bulbsArr);
    }
    toggleBulb(switchNum, bulbsArr);
  }

  function toggleBulb(idx, bulbsArr) {
    bulbsArr[idx] = bulbsArr[idx] === '0' ? '1' : '0';
  }

  function isMatch(idx, bulbsArr) {
    return bulbsArr[idx] === bulbsTarget[idx];
  }
}
