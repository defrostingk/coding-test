const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const words = input.slice(1);
  const counter = {};
  const sortedCounter = [];
  const table = {};

  words.forEach((word) => {
    for (let i = word.length - 1; i >= 0; i--) {
      if (!counter[word[i]]) counter[word[i]] = 0;
      counter[word[i]] += 10 ** (word.length - i - 1);
    }
  });

  for (let key in counter) {
    sortedCounter.push([key, counter[key]]);
  }
  sortedCounter
    .sort((a, b) => b[1] - a[1])
    .forEach(([alpha, _], idx) => (table[alpha] = 9 - idx));

  let sum = 0;
  for (let key in counter) {
    sum += table[key] * counter[key];
  }
  console.log(sum);
})(input);
