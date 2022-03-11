const fs = require("fs");
const [n, m] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

printPermutationOneToN(n, m);

function printPermutationOneToN(n, r) {
  const permutation = getPermutationOneToN(n, r).map((permutation) =>
    permutation.join(" ")
  );
  console.log(permutation.join("\n"));
}

function getPermutationOneToN(n, r) {
  const num = new Array(n).fill().map((v, i) => (v = i + 1));
  return getPermutation(num, r);
}

function getPermutation(numArr, r) {
  let result = [];
  if (r === 1) {
    return numArr.map((v) => [v]);
  }

  numArr.forEach((fixed, idx, ori) => {
    const rest = [...ori.slice(0, idx), ...ori.slice(idx + 1)];
    const restOfPermutation = getPermutation(rest, r - 1);
    const part = restOfPermutation.map((permutation) => [
      fixed,
      ...permutation,
    ]);
    result.push(...part);
  });
  return result;
}
