const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const octalToBinary = (octal) => {
  const binaryThreeDigit = [];
  let binary;
  for (let i = 0; i < octal.length; i++) {
    binaryThreeDigit.push(octalToBinaryOneDigitEach(octal[i]));
  }
  binary = binaryThreeDigit.join("");
  while (binary[0] !== "1" && binary.length > 1) {
    binary = binary.slice(1, binary.length);
  }
  return binary;
};

const octalToBinaryOneDigitEach = (octalOneDigit) => {
  let octal = +octalOneDigit;
  let binaryDigit = 4;
  let binary = "";
  for (let i = 0; i < 3; i++) {
    binary += String(Math.floor(octal / binaryDigit));
    octal %= binaryDigit;
    binaryDigit /= 2;
  }
  return binary;
};

console.log(octalToBinary(input));
