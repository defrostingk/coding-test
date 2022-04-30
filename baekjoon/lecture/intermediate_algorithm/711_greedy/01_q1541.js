const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim();

solution();

function solution() {
  let value = '';
  let result = 0;
  let plus = 1;

  for (let i = 0; i < input.length; i++) {
    const op = input[i];
    if (op !== '+' && op !== '-') {
      value += input[i];
    } else {
      result += plus ? +value : -+value;
      value = '';
      if (op === '-') plus = 0;
    }
  }
  result += plus ? +value : -+value;
  console.log(result);
}
