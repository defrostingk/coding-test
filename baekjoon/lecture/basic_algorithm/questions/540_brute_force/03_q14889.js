const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const players = +input.shift();
const status = input.map((column) => column.split(' ').map(Number));

console.log(getMinDiff(players, status));

function getMinDiff(players, status) {
  const visited = new Array(players);
  let members = players / 2;
  const diff = [];
  let start = [];
  let link = [];

  dfs(0, 1);

  return Math.min(...diff);

  function dfs(depth, idx) {
    if (depth === members) {
      start = [];
      link = [];
      for (let i = 0; i < players; i++) {
        if (visited[i]) {
          start.push(i);
        } else {
          link.push(i);
        }
      }
      diff.push(getDiff(start, link, status));
      return;
    }
    for (let i = idx; i < players; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(depth + 1, i + 1);
        visited[i] = false;
      }
    }
  }
}

function getDiff(start, link, status) {
  return Math.abs(getTeamStatus(start, status) - getTeamStatus(link, status));
}

function getTeamStatus(team, status) {
  let teamStatus = 0;
  let p1, p2;

  for (let i = 0; i < team.length - 1; i++) {
    for (let j = i + 1; j < team.length; j++) {
      p1 = team[i];
      p2 = team[j];
      teamStatus += status[p1][p2] + status[p2][p1];
    }
  }

  return teamStatus;
}
