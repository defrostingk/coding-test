const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const getSuffix = (string) => {
  const { length } = string;
  let suffix = [];
  let tmp = "";
  for (let i = 0; i < length; i++) {
    tmp += string.slice(i, length);
    suffix.push(tmp);
    tmp = "";
  }
  suffix.sort();
  return suffix.join("\n");
};

console.log(getSuffix(input));
