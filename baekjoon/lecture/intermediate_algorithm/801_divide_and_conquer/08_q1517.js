const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

(function solution(input) {
  const n = +input[0];
  const sequence = input[1]
    .split(' ')
    .map((value, idx) => [+value, idx])
    .sort((a, b) => a[0] - b[0]);

  const treeSize = 2 ** Math.ceil(Math.log2(n) + 1);
  const tree = new Array(treeSize).fill(0);

  let swap = 0;
  for (let i = 0; i < n; i++) {
    const idx = sequence[i][1];
    swap += getSum(1, 0, n - 1, idx + 1, n - 1);
    update(1, 0, n - 1, idx, 1);
  }
  console.log(swap);

  function getSum(node, start, end, qStart, qEnd) {
    if (start > qEnd || end < qStart) return 0;
    if (start >= qStart && end <= qEnd) return tree[node];

    const mid = Math.floor((start + end) / 2);
    return (
      getSum(node * 2, start, mid, qStart, qEnd) +
      getSum(node * 2 + 1, mid + 1, end, qStart, qEnd)
    );
  }

  function update(node, start, end, idx, diff) {
    if (start === end) return (tree[node] = diff);

    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) update(node * 2, start, mid, idx, diff);
    else update(node * 2 + 1, mid + 1, end, idx, diff);

    tree[node] = tree[node * 2] + tree[node * 2 + 1];
  }
})(input);
