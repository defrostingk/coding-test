const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((x) => +x);

const n = input[0];
const k = input[1];

const getJosphusSequence = (n, k) => {
  let sequence = [];
  let people = [];
  let head = 0;
  for (let i = 0; i < n; i++) people[i] = i + 1;

  while (people.length) {
    head += k - 1;
    head %= people.length;
    sequence.push(people.splice(head, 1)[0]);
  }

  return "<" + sequence.join(", ") + ">";
};

console.log(getJosphusSequence(n, k));
