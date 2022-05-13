const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const students = input.slice(1).map((student) =>
    student.split(' ').map((v, idx) => {
      if (idx > 0) return +v;
      else return v;
    })
  );
  students.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) {
        if (a[3] === b[3]) {
          if (a[0] > b[0]) {
            return 1;
          } else return -1;
        } else return b[3] - a[3];
      } else return a[2] - b[2];
    } else return b[1] - a[1];
  });
  students.map((student, idx, arr) => (arr[idx] = student[0]));
  console.log(students.join('\n'));
})(input);
