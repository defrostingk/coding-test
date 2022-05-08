const atmos = [
  [80, 35],
  [70, 38],
  [100, 41],
  [75, 30],
  [160, 80],
  [77, 29],
  [181, 68],
  [151, 76],
];

console.log(solution(atmos));

function solution(atmos) {
  let cnt = 0;
  let newMask = 0;
  let use = 0;

  atmos.forEach((day, idx) => {
    const [fine, ultraFine] = day;
    if (newMask) use++;
    if (use > 2) {
      use = 0;
      newMask = 0;
    }
    if (fine > 80 || ultraFine > 35) {
      if (!use) cnt++;
      newMask = 1;
      if (fine > 150 && ultraFine > 75) {
        use = 0;
        newMask = 0;
      }
    }
  });
  return cnt;
}
