const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const tree = {};
input.slice(1).forEach((edge) => {
  const [node, left, right] = edge.split(' ');
  tree[node] = [left, right];
});

printTraversal('A');

function printTraversal(node) {
  let result = '';
  preorder(node);
  result += '\n';
  inorder(node);
  result += '\n';
  postorder(node);
  console.log(result);

  function preorder(node) {
    if (node === '.') return;
    const [left, right] = tree[node];
    result += node;
    preorder(left);
    preorder(right);
  }

  function inorder(node) {
    if (node === '.') return;
    const [left, right] = tree[node];
    inorder(left);
    result += node;
    inorder(right);
  }

  function postorder(node) {
    if (node === '.') return;
    const [left, right] = tree[node];
    postorder(left);
    postorder(right);
    result += node;
  }
}
