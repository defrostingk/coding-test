const line = 'Q4OYPI';

console.log(solution(line));

function solution(line) {
  const numbers = Array.from(Array(10), (v, i) => (v = `${i + 1}`));
  numbers[9] = '0';
  const alphabets = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyboard = [numbers, alphabets];
  let curLeft = { x: 0, y: 1 };
  let curRight = { x: 9, y: 1 };

  const answer = [];

  const typing = line.split('');
  typing.forEach((input) => {
    if (keyboard[0].includes(input)) {
      const y = 0;
      const x = keyboard[y].indexOf(input);
      const distanceLeft = Math.abs(x - curLeft.x) + Math.abs(y - curLeft.y);
      const distanceRight = Math.abs(x - curRight.x) + Math.abs(y - curRight.y);

      if (distanceLeft < distanceRight) {
        handleLeft(x, y);
      } else if (distanceLeft > distanceRight) {
        handleRight(x, y);
      } else {
        const distanceLeftX = Math.abs(x - curLeft.x);
        const distanceRightX = Math.abs(x - curRight.x);
        if (distanceLeftX < distanceRightX) {
          handleLeft(x, y);
        } else if (distanceLeftX > distanceRightX) {
          handleRight(x, y);
        } else {
          if (x < 5) {
            handleLeft(x, y);
          } else {
            handleRight(x, y);
          }
        }
      }
    } else {
      const y = 1;
      const x = keyboard[y].indexOf(input);
      const distanceLeft = Math.abs(x - curLeft.x) + Math.abs(y - curLeft.y);
      const distanceRight = Math.abs(x - curRight.x) + Math.abs(y - curRight.y);

      if (distanceLeft < distanceRight) {
        handleLeft(x, y);
      } else if (distanceLeft > distanceRight) {
        handleRight(x, y);
      } else {
        const distanceLeftX = Math.abs(x - curLeft.x);
        const distanceRightX = Math.abs(x - curRight.x);
        if (distanceLeftX < distanceRightX) {
          handleLeft(x, y);
        } else if (distanceLeftX > distanceRightX) {
          handleRight(x, y);
        } else {
          if (x < 5) {
            handleLeft(x, y);
          } else {
            handleRight(x, y);
          }
        }
      }
    }
  });

  return answer;

  function handleLeft(x, y) {
    curLeft = { x, y };
    answer.push(0);
  }
  function handleRight(x, y) {
    curRight = { x, y };
    answer.push(1);
  }
}
