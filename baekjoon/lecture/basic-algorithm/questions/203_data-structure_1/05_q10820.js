const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().split("\n");

const lowerCaseRegex = /[a-z]/g;
const upperCaseRegex = /[A-Z]/g;
const numberRegex = /[0-9]/g;
const spaceRegex = /\s/g;

const getMatchRegexCnt = (string, regex) => {
  let match = string.match(regex);
  return match ? match.length : 0;
};

const solution = (input) => {
  let result = "";
  input.forEach((string) => {
    if (string.length) {
      result += `${getMatchRegexCnt(string, lowerCaseRegex)} `;
      result += `${getMatchRegexCnt(string, upperCaseRegex)} `;
      result += `${getMatchRegexCnt(string, numberRegex)} `;
      result += `${getMatchRegexCnt(string, spaceRegex)}\n`;
    }
  });
  console.log(result.trim());
};

solution(input);
