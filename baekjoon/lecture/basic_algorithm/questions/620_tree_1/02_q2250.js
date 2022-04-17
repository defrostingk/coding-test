const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const EMPTY = -1;
const nodes = +input[0];
const edges = input.slice(1);

printMaxWidthLevelAndWidth(nodes, edges);

function printMaxWidthLevelAndWidth(nodes, edges) {
  const trees = Array.from(Array(nodes + 1), () => new Array());
  const root = makeTreesAndgetRoot();

  const levels = Array.from(Array(nodes + 1), () => new Array());
  let columnConter = 1;
  inorder(root, 1);

  const maxWidthLevelAndWidth = getMaxWidthLevelAndWidth(levels);
  console.log(maxWidthLevelAndWidth.join(' '));

  function makeTreesAndgetRoot() {
    const nodeCounter = new Array(nodes + 1).fill(0);
    edges.forEach((edge) => {
      const [from, ...to] = edge.split(' ').map(Number);
      nodeCounter[from]++;
      for (let child of to) {
        trees[from].push(child);
        nodeCounter[child]++;
      }
    });
    return nodeCounter.indexOf(1);
  }

  function inorder(node, level) {
    if (node === EMPTY) return;
    const [left, right] = trees[node];
    inorder(left, level + 1);
    levels[level].push(columnConter++);
    inorder(right, level + 1);
  }

  function getMaxWidthLevelAndWidth(levels) {
    let max = [0, 0];
    levels.forEach((nodes, level) => {
      if (nodes.length) {
        const width = Math.max(...nodes) - Math.min(...nodes) + 1;
        if (width > max[1]) max = [level, width];
      }
    });
    return max;
  }
}
