const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
const testCases = input.map(Number);

const getPrimeLessThan = (num) => {
  let eratos = new Array(num).fill(1);
  eratos[0] = 0;
  eratos[1] = 0;
  for (let i = 2; i < num; i++) {
    if (eratos[i]) {
      for (let j = 2 * i; j < num; j += i) {
        eratos[j] = 0;
      }
    }
  }

  return eratos;
};

const SIEVE_OF_ERATOSTHENES = getPrimeLessThan(1000000);

const getCntGoldbachPartitionOf = (evenNum) => {
  const prime = SIEVE_OF_ERATOSTHENES;
  let small, big;
  let cnt = 0;

  for (let i = 2; i <= evenNum / 2; i++) {
    small = i;
    big = evenNum - i;
    if (prime[big] && prime[small]) cnt++;
  }
  return cnt;
};

const printCntGoldbachPartitionOfTestCases = () => {
  const cnt = [];
  testCases.forEach((even) => cnt.push(getCntGoldbachPartitionOf(even)));
  console.log(cnt.join("\n"));
};

printCntGoldbachPartitionOfTestCases();
