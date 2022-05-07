const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const channel = input.shift();
const NumOfBrokenBtn = input.shift();
const brokenBtn = input;
const CURRENT_CHANNEL = 100;

printMinPressBtn(channel, brokenBtn);

function printMinPressBtn(des, brokenBtn) {
  console.log(cntMinPressBtn(des, brokenBtn));
}

function cntMinPressBtn(des, brokenBtn) {
  const diff = Math.abs(des - CURRENT_CHANNEL);
  if (des === CURRENT_CHANNEL) {
    return 0;
  }
  if (diff <= des.toString().length) {
    return diff;
  }
  if (brokenBtn.length === 0) {
    return des.toString().length;
  }
  if (brokenBtn.length === 9 && !brokenBtn.includes(0)) {
    return Math.min(diff, 1 + des);
  }
  if (brokenBtn.length === 10) {
    return diff;
  }

  const normalBtn = new Array(10)
    .fill()
    .map((v, i) => (v = i))
    .filter((btn) => !brokenBtn.includes(btn))
    .sort((a, b) => a - b);
  const bottom = des - diff;
  const top = des + diff;
  let cntOnlyPnMBtn, cntNumAndPnMBtn;

  // i) += 버튼만으로 이동한 경우
  cntOnlyPnMBtn = diff;
  // ii) 숫자 버튼으로 근접 채널로 이동 후 (for문에서의 i)
  // +- 버튼으로 이동한 경우
  // (숫자 버튼만으로 이동한 경우도 포함)
  cntNumAndPnMBtn = Number.MAX_SAFE_INTEGER;
  for (let i = bottom; i <= top; i++) {
    if (areNormalBtns(i, normalBtn)) {
      cntNumAndPnMBtn = Math.min(
        cntNumAndPnMBtn,
        i.toString().length + Math.abs(i - des)
      );
    }
  }

  return Math.min(cntOnlyPnMBtn, cntNumAndPnMBtn);
}

function areNormalBtns(btns, normalBtn) {
  const btnsString = btns.toString();
  for (let i = 0; i < btnsString.length; i++) {
    if (!normalBtn.includes(+btnsString[i])) {
      return false;
    }
  }
  return true;
}
