const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = +input.shift();
const data = input.map((x) => x.split(/\s+/));

const getSortedMembers = (members) => {
  members.sort((a, b) => {
    if (+a[0] > +b[0]) return 1;
    if (+a[0] < +b[0]) return -1;
  });
  return members;
};

console.log(
  getSortedMembers(data)
    .reduce((acc, cur) => (acc += `${cur[0]} ${cur[1]}\n`), "")
    .trim()
);
