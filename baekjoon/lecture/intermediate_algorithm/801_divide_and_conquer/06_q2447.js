const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim();

const n = +input;

(function solution(n) {
  console.log(printStars(n).join('\n'));
  function printStars(n) {
    if (n === 3) return ['***', '* *', '***'];
    const result = [];
    const stars = printStars(n / 3);
    const space = ' '.repeat(n / 3);

    stars.forEach((star) => result.push(star.repeat(3)));
    stars.forEach((star) => result.push(`${star}${space}${star}`));
    stars.forEach((star) => result.push(star.repeat(3)));

    return result;
  }
})(n);
