const s = 'one4seveneight';

function solution(s) {
  var answer = 0;

  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  answer = s;
  numbers.forEach((number, idx) => {
    const reg = new RegExp(number, 'g');
    answer = answer.replace(reg, `${idx}`);
  });

  return answer;
}

console.log(solution(s));
