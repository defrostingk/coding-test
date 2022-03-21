const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const status = input.map((row) => row.split(' ').map(Number));
const zeroPadding = new Array(n).fill(0);
status.unshift(zeroPadding);
status.forEach((column) => column.unshift(0));

printMinDiffOfTeamStatus(n, status);

function printMinDiffOfTeamStatus(n, status) {
  console.log(getMinDiffOfTeamStatus(n, status));
}

function getMinDiffOfTeamStatus(players, status) {
  const visited = new Array(players);
  const members = players / 2;
  let teamA = [];
  let teamB = [];
  const diff = [];

  dfs(0, 1);

  return Math.min(...diff);

  function dfs(depth, idx) {
    if (depth === members) {
      teamA = [];
      teamB = [];
      for (let i = 0; i < players; i++) {
        if (visited[i]) {
          teamA.push(i + 1);
        } else {
          teamB.push(i + 1);
        }
      }
      diff.push(getDiffOfTeamStatus(teamA, teamB, status));
      return;
    }

    for (let i = idx; i < players; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(depth + 1, i);
        visited[i] = false;
      }
    }
  }
}

function getDiffOfTeamStatus(teamA, teamB, status) {
  return Math.abs(getTeamStatus(teamA, status) - getTeamStatus(teamB, status));
}

function getTeamStatus(team, status) {
  let teamStatus = 0;
  let playerA, playerB;

  for (let i = 0; i < team.length - 1; i++) {
    for (let j = i + 1; j < team.length; j++) {
      playerA = team[i];
      playerB = team[j];
      teamStatus += status[playerA][playerB] + status[playerB][playerA];
    }
  }

  return teamStatus;
}
