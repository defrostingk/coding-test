// const alp = 10;
// const cop = 10;
// const problems = [
//   [10, 15, 2, 1, 2],
//   [20, 20, 3, 3, 4],
// ];

const alp = 0;
const cop = 0;
const problems = [
  [0, 0, 2, 1, 2],
  [4, 5, 3, 1, 2],
  [4, 11, 4, 0, 2],
  [10, 4, 0, 4, 2],
];

console.log(solution(alp, cop, problems));

function solution(alp, cop, problems) {
  let alp_max_req = 0;
  let cop_max_req = 0;
  let alp_min_req = 150;
  let cop_min_req = 150;

  problems.sort((a, b) => a[4] - b[4]);
  problems.forEach((problem) => {
    const [alp_req, cop_req] = problem.slice(0, 2);
    alp_max_req = Math.max(alp_max_req, alp_req);
    cop_max_req = Math.max(cop_max_req, cop_req);
    alp_min_req = Math.min(alp_min_req, alp_req);
    cop_min_req = Math.min(cop_min_req, cop_req);
  });

  let alp_cur = alp;
  let cop_cur = cop;
  let alp_diff = alp_max_req - alp_cur;
  let cop_diff = cop_max_req - cop_cur;
  let time = 0;

  while (alp_cur < alp_min_req || cop_cur < cop_min_req) {
    if (alp_cur < alp_min_req) {
      alp_cur++;
      time++;
    } else if (cop_cur < cop_min_req) {
      cop_cur++;
      time++;
    }
  }

  console.log(alp_cur, cop_cur, time);

  while (alp_diff > 0 || cop_diff > 0) {
    let solve = 0;

    for (let i = 0; i < problems.length; i++) {
      const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
      if (alp_cur >= alp_req && cop_cur >= cop_req) {
        alp_cur += alp_rwd;
        cop_cur += cop_rwd;
        time += cost;
        alp_diff = alp_max_req - alp_cur;
        cop_diff = cop_max_req - cop_cur;
        solve = 1;
        break;
      }
    }
  }

  alp_diff = alp_max_req - alp_cur;
  cop_diff = cop_max_req - cop_cur;

  return time;
}
