const n = 8; // 행 개수
const k = 2; // 선택된 행 idx
const cmd = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C'];

console.log(solution(n, k, cmd));

function solution(n, k, cmd) {
  const answer = new Array(n).fill('O');
  let cursor = k;
  const removed = [];

  cmd.forEach((command) => {
    const order = command[0];
    let x;
    switch (order) {
      case 'U':
        x = +command.split(' ')[1];
        while (x > 0) {
          cursor--;
          if (answer[cursor] === 'O') x--;
        }
        break;

      case 'D':
        x = +command.split(' ')[1];
        while (x > 0) {
          cursor++;
          if (answer[cursor] === 'O') x--;
        }
        break;

      case 'C':
        answer[cursor] = 'X';
        removed.push(cursor);
        cursor++;
        while (answer[cursor] === 'X') {
          cursor++;
        }
        if (cursor >= n) cursor = n - 1;
        while (answer[cursor] === 'X') {
          cursor--;
        }
        if (cursor < 0) cursor = 0;
        break;

      case 'Z':
        const restore = removed.pop();
        answer[restore] = 'O';
        break;
    }
  });

  return answer.join('');
}
