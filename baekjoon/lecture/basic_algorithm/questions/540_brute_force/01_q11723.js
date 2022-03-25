const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const m = +input.shift();
const commands = input.map((command) => command.split(' '));

let s = new Array(20).fill(0);

commandProcessor(commands);

function commandProcessor(commands) {
  let op, x, idx;
  let result = '';
  commands.forEach((cmd) => {
    op = cmd[0];
    switch (op) {
      case 'add':
        x = cmd[1];
        if (!s[x - 1]) {
          s[x - 1] = 1;
        }
        break;
      case 'remove':
        x = cmd[1];
        if (s[x - 1]) {
          s[x - 1] = 0;
        }
        break;
      case 'check':
        x = cmd[1];
        if (s[x - 1]) {
          result += '1';
        } else {
          result += '0';
        }
        result += '\n';
        break;
      case 'toggle':
        x = cmd[1];
        if (s[x - 1]) {
          s[x - 1] = 0;
        } else {
          s[x - 1] = 1;
        }
        break;
      case 'all':
        s.fill(1);
        break;
      case 'empty':
        s.fill(0);
        break;
    }
  });
  console.log(result.trim());
}
