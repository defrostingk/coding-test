const fs = require("fs");
const infix = fs.readFileSync("../input.txt").toString().trim();

const cmpPriority = (opA, opB) => {
  if (opA === "*" || opA === "/") opA = 2;
  else if (opA === "+" || opA === "-") opA = 1;
  else if (opA === "(" || opA === ")") opA = 0;
  else opA = null;

  if (opB === "*" || opB === "/") opB = 2;
  else if (opB === "+" || opB === "-") opB = 1;
  else if (opB === "(" || opB === ")") opB = 0;
  else opB = null;

  return opA - opB;
};

const infixToPostfix = (infix) => {
  let stack = [];
  let postfix = "";

  for (let i = 0; i < infix.length; i++) {
    switch (infix[i]) {
      case "+":
      case "-":
      case "*":
      case "/":
        while (
          stack.length &&
          cmpPriority(stack[stack.length - 1], infix[i]) >= 0
        ) {
          postfix += stack.pop();
        }
        stack.push(infix[i]);
        break;
      case "(":
        stack.push(infix[i]);
        break;
      case ")":
        while (stack.length && stack[stack.length - 1] !== "(") {
          postfix += stack.pop();
        }
        stack.pop();
        break;
      default:
        postfix += infix[i];
        break;
    }
  }
  while (stack.length) {
    postfix += stack.pop();
  }

  return postfix;
};

console.log(infixToPostfix(infix));
