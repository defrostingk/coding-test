const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();

const testCases = input.map((x) => x.split(" "));

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  newPush(data) {
    this.stack[++this.top] = data;
  }
  newPop() {
    if (this.top < 0) return -1;
    this.top--;
    return this.stack.splice(-1)[0];
  }
}

const getReversedWord = (word) => {
  let reversedWord = new Stack();
  let alpha = new Stack();
  alpha.stack = word.split("");
  alpha.top = alpha.stack.length - 1;
  while (alpha.top >= 0) {
    reversedWord.newPush(alpha.newPop());
  }
  return reversedWord.stack.join("");
};
const getReversedSentence = (sentence) => {
  let reversedSentence = "";
  sentence.forEach((word) => {
    reversedSentence += getReversedWord(word) + " ";
  });
  return reversedSentence.trim();
};

const solution = (testCases) => {
  let result = "";
  testCases.forEach((testCase) => {
    result += getReversedSentence(testCase) + "\n";
  });
  console.log(result.trim());
  return;
};

solution(testCases);
