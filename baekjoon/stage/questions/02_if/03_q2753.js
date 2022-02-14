const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().trim();

const year = +input;
let isLeapYear = null;

isLeapYear = (!(year % 4) && year % 100) || !(year % 400) ? true : false;

console.log(+isLeapYear);
