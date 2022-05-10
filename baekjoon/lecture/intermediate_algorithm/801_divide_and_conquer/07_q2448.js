const input = require('fs').readFileSync('../input.txt').toString().trim();
const n = +input;

(function solution(n) {
  const stars = getStars(n);

  console.log(stars.join('\n'));

  function getStars(n) {
    const result = [];
    if (n === 3) {
      result.push('  *  ');
      result.push(' * * ');
      result.push('*****');
      return result;
    }

    const half = n / 2;
    const space = ' '.repeat(half);
    const stars = getStars(half);
    stars.forEach((star) => result.push(`${space}${star}${space}`));
    stars.forEach((star) => result.push(`${star} ${star}`));

    return result;
  }
})(n);
