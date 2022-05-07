const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const players = +input.shift();
const status = input.map((row) => row.split(' ').map(Number));

status.unshift(new Array(players).fill(0));
status.forEach((row) => row.unshift(0));

printMinDiffOfTeamStatus(players, status);

function printMinDiffOfTeamStatus(players, status) {
  console.log(getMinDiffOfTeamStatus(players, status));
}

function getMinDiffOfTeamStatus(players, status) {
  const visited = new Array(players);
  let members;
  let start = [];
  let link = [];
  const diff = [];

  // member가 1인 team의 status는 0이므로 확인할 필요가 없다.
  for (let i = 2; i < Math.ceil(players / 2); i++) {
    members = i;
    dfs(0, 0);
  }
  if (players % 2 === 0) {
    members = players / 2;
    dfs(0, 1);
  }

  return Math.min(...diff);

  function dfs(depth, idx) {
    if (depth === members) {
      start = [];
      link = [];
      for (let i = 0; i < players; i++) {
        if (visited[i]) {
          start.push(i + 1);
        } else {
          link.push(i + 1);
        }
      }
      diff.push(getDiffOfTeamStatus(start, link, status));
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

function getDiffOfTeamStatus(start, link, status) {
  return Math.abs(getTeamStatus(start, status) - getTeamStatus(link, status));
}

function getTeamStatus(team, status) {
  const { length } = team;
  let teamStatus = 0;
  let playerA, playerB;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      playerA = team[i];
      playerB = team[j];
      teamStatus += status[playerA][playerB] + status[playerB][playerA];
    }
  }
  return teamStatus;
}
