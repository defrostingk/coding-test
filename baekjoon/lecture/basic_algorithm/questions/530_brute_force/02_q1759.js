const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [passwordLength, passwordPoolSize] = input
  .shift()
  .split(/\s/)
  .map(Number);

const passwordPool = input.shift().split(/\s/);

printPasswords(passwordLength, passwordPool);

function printPasswords(passwordLength, passwordPool) {
  console.log(getPasswords(passwordLength, passwordPool).join('\n'));
}

function getPasswords(passwordLength, passwordPool) {
  const { length } = passwordPool;
  const visited = new Array(passwordPool.length);
  const part = [];
  const result = [];

  passwordPool.sort();

  dfs(0, 0);

  return result;

  function dfs(depth, idx) {
    if (passwordLength === depth) {
      let vowels = cntVowelInPassword(part);
      if (vowels && depth - vowels > 1) {
        result.push(part.join(''));
        return;
      }
    }
    for (let i = idx; i < length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        part.push(passwordPool[i]);
        dfs(depth + 1, i);
        part.pop();
        visited[i] = false;
      }
    }
  }

  function cntVowelInPassword(password) {
    let cnt = 0;
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < 5; i++) {
      if (password.includes(vowel[i])) {
        cnt++;
      }
    }
    return cnt;
  }
}
