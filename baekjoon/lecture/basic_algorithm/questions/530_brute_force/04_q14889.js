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
  let min = 1000;
  getTeams(players).forEach((teams) => {
    const teamA = teams[0];
    const teamB = teams[1];
    min = Math.min(min, getDiffOfTeamStatus(teamA, teamB, status));
  });
  return min;
}

function getTeams(players) {
  const teams = [];
  const teamA = [];
  let teamB = [];
  const visited = new Array(players).fill(false);
  const members = players / 2;

  dfs(0, 0);

  function dfs(depth, idx) {
    if (depth === members && teamA[0] === 1) {
      teamB = [];
      visited.forEach((v, i) => {
        if (!v) {
          teamB.push(i + 1);
        }
      });
      teams.push([[...teamA], teamB]);
      return;
    }
    for (let i = idx; i < players; i++) {
      if (!visited[i]) {
        visited[i] = true;
        teamA.push(i + 1);
        dfs(depth + 1, i);
        teamA.pop();
        visited[i] = false;
      }
    }
  }

  return teams;
}

function getDiffOfTeamStatus(team1, team2, status) {
  return Math.abs(getTeamStatus(team1, status) - getTeamStatus(team2, status));
}

function getTeamStatus(team, status) {
  let teamStatus = 0;
  const combination = [];

  for (let i = 0; i < team.length - 1; i++) {
    for (let j = i + 1; j < team.length; j++) {
      combination.push([team[i], team[j]]);
    }
  }
  combination.forEach((combi) => {
    teamStatus += status[combi[0]][combi[1]] + status[combi[1]][combi[0]];
  });

  return teamStatus;
}
