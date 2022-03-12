const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

printPermutationWithRepetitionOneToN(n, m);

function printPermutationWithRepetitionOneToN(n, r) {
  const permutation = getPermutationWithRepetitionOneToN(n, r).map((v) =>
    v.join(" ")
  );
  console.log(permutation.join("\n"));
}
function getPermutationWithRepetitionOneToN(n, r) {
  const numArr = new Array(n).fill().map((v, i) => (v = i + 1));
  return getPermutationWithRepetition(numArr, r);
}

function getPermutationWithRepetition(numArr, r) {
  let result = [];
  if (r === 1) {
    return numArr.map((v) => [v]);
  }

  numArr.forEach((fixed, idx, ori) => {
    const rest = ori;
    const permutationOfRest = getPermutationWithRepetition(rest, r - 1);
    const part = permutationOfRest.map((permutation) => [
      fixed,
      ...permutation,
    ]);
    result.push(...part);
  });

  return result;
}
