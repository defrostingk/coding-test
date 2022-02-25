const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const binaryToOctal = (binary) => {
  const { length } = binary;
  const stack = [];
  let octal = [];
  let idx = 0;

  if (length % 3 === 2) {
    stack.push("0" + binary[idx++] + binary[idx++]);
  } else if (length % 3 === 1) {
    stack.push("00" + binary[idx++]);
  }

  for (let i = idx; i < length; i += 3) {
    stack.push(binary[i] + binary[i + 1] + binary[i + 2]);
  }

  stack.forEach((binaryThreeDigit) =>
    octal.push(binaryToOctalThreeDigitEach(binaryThreeDigit))
  );

  return octal.join("");
};

const binaryToOctalThreeDigitEach = (binaryThreeDigit) => {
  let octal = 0;
  for (let i = 0; i < binaryThreeDigit.length; i++) {
    octal += Math.pow(2, 2 - i) * +binaryThreeDigit[i];
  }
  return String(octal);
};

console.log(binaryToOctal(input));
