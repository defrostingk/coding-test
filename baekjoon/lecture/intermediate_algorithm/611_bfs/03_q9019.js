const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const testCases = input
    .slice(1)
    .map((testCase) => testCase.split(' ').map(Number));
  const command = ['D', 'S', 'L', 'R'];

  let result = '';
  testCases.forEach(([from, to]) => bfs(from, to));
  console.log(result.trim());

  function bfs(from, to) {
    const queue = [from];
    const visited = new Array(10000).fill('');
    visited[from] = 'start';
    let head = 0;

    while (queue.length > head) {
      const curReg = queue[head++];
      if (curReg === to) {
        result += visited[curReg].slice(5) + '\n';
        return;
      }
      for (let i = 0; i < command.length; i++) {
        const cmd = command[i];
        const nextReg = handleCommand(cmd, curReg);
        if (visited[nextReg]) continue;
        visited[nextReg] = visited[curReg] + cmd;
        queue.push(nextReg);
      }
    }
  }
  function handleCommand(command, register) {
    switch (command) {
      case 'D':
        return double(register);
      case 'S':
        return substract(register);
      case 'L':
        return rotateLeft(register);
      case 'R':
        return rotateRight(register);
    }
  }
  function double(register) {
    return (register * 2) % 10000;
  }
  function substract(register) {
    return register === 0 ? 9999 : register - 1;
  }
  function rotateLeft(register) {
    return (register % 1000) * 10 + Math.floor(register / 1000);
  }
  function rotateRight(register) {
    return (register % 10) * 1000 + Math.floor(register / 10);
  }
})(input);
