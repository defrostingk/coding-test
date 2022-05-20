const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const beads = input[1].split(' ').map(Number);
  let maxEnergy = 0;

  dfs(0, beads);

  console.log(maxEnergy);

  function dfs(energy, beads) {
    if (beads.length <= 2) {
      maxEnergy = Math.max(maxEnergy, energy);
      return;
    }
    for (let i = 1; i < beads.length - 1; i++) {
      const restBeads = [...beads.slice(0, i), ...beads.slice(i + 1)];
      dfs(energy + beads[i - 1] * beads[i + 1], restBeads);
    }
  }
})(input);
