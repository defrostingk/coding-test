const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));

function solution(survey, choices) {
  var answer = '';
  const characters = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((question, idx) => {
    const notAgree = question[0];
    const agree = question[1];
    const choice = choices[idx];
    if (choice < 4) characters[notAgree] += 4 - choice;
    else if (choice > 4) characters[agree] += choice - 4;
  });

  if (characters.R < characters.T) answer += 'T';
  else answer += 'R';
  if (characters.C < characters.F) answer += 'F';
  else answer += 'C';
  if (characters.J < characters.M) answer += 'M';
  else answer += 'J';
  if (characters.A < characters.N) answer += 'N';
  else answer += 'A';

  return answer;
}
