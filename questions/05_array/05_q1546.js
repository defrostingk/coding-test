const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const scores = input[1].split(" ").map((x) => +x);

let max = 0;
let avg = 0;

scores.forEach((score) => (max = max < score ? score : max));
scores.forEach((score, index) => (scores[index] = (score / max) * 100));
scores.forEach((score) => (avg += score));
avg /= scores.length;

console.log(avg);
