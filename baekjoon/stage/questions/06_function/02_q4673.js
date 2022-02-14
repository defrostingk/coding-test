const checkSelfNumber = (numList) => {
  numList.forEach((num, idx) => {
    let digitNum = String(num)
      .split("")
      .map((x) => +x);
    let sum = digitNum.reduce((acc, cur) => (acc += cur));
    sum += num;
    numList = numList.filter((oriNum) => oriNum !== sum);
  });
  return numList;
};

const printSelfNumber = (max) => {
  let selfNumber = [];
  let result = "";
  for (let i = 1; i < max + 1; i++) {
    selfNumber.push(i);
  }
  selfNumber = checkSelfNumber(selfNumber);
  selfNumber.forEach((num) => (result += `${num}\n`));
  console.log(result.trim());
};

printSelfNumber(10000);
