const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [n, , ...data] = input.map((x) => +x);
const postfix = input[1];

const calculatePostfix = (postfix, data) => {
  const stack = [];
  const dataTable = {};
  let a, b;

  for (let i = 0; i < data.length; i++) {
    dataTable[String.fromCharCode(i + 65)] = data[i];
  }

  for (let i = 0; i < postfix.length; i++) {
    if (dataTable[postfix[i]]) {
      stack.push(dataTable[postfix[i]]);
    } else {
      b = stack.pop();
      a = stack.pop();
      switch (postfix[i]) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          break;
      }
    }
  }

  return stack.pop().toFixed(2);
};

console.log(calculatePostfix(postfix, data));
