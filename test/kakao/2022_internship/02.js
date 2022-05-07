const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];

// const queue1 = [1, 2, 1, 2];
// const queue2 = [1, 10, 1, 2];

// const queue1 = [1, 1];
// const queue2 = [1, 5];

console.log(solution(queue1, queue2));

function solution(queue1, queue2) {
  const queue12 = [...queue1, ...queue2];
  const half = queue12.reduce((acc, cur) => acc + cur) / 2;
  let sum = queue1.reduce((acc, cur) => acc + cur);

  let max = queue1.length * 3;
  let cnt = 0;
  let head1 = 0;
  let head2 = 0;
  while (queue1.length > head1 && queue2.length > head2 && max > cnt) {
    if (sum === half) {
      break;
    } else if (sum < half) {
      const popped = queue2[head2++];
      sum += popped;
      queue1.push(popped);
      cnt++;
    } else if (sum > half) {
      const popped = queue1[head1++];
      sum -= popped;
      queue2.push(popped);
      cnt++;
    }
  }

  return sum === half ? cnt : -1;
}
