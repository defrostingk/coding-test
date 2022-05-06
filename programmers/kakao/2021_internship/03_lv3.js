const n = 8; // 행 개수
const k = 2; // 선택된 행 idx
const cmd = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C'];

console.log(solution(n, k, cmd));

function solution(n, k, cmd) {
  class Node {
    constructor(idx, prev) {
      this.idx = idx;
      this.prev = prev;
      this.next = null;
    }
  }

  const removed = [];
  let prevNode = new Node(0);
  let cursor;

  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;
    if (i === k) {
      cursor = newNode;
    }
  }

  cmd.forEach((command) => {
    const order = command[0];
    let x;
    switch (order) {
      case 'U':
        x = +command.split(' ')[1];
        move(x, 'prev');
        break;

      case 'D':
        x = +command.split(' ')[1];
        move(x, 'next');
        break;

      case 'C':
        deleteNode();
        break;

      case 'Z':
        restoreNode();
        break;
    }
  });

  const answer = new Array(n).fill('O');
  removed.forEach((node) => (answer[node.idx] = 'X'));
  return answer.join('');

  function move(distance, direction) {
    for (let i = 0; i < distance; i++) {
      if (cursor[direction]) cursor = cursor[direction];
      else break;
    }
  }

  function deleteNode() {
    removed.push(cursor);
    const prevNode = cursor.prev;
    const nextNode = cursor.next;

    cursor = nextNode ? nextNode : prevNode;

    if (prevNode) prevNode.next = nextNode;
    if (nextNode) nextNode.prev = prevNode;
  }

  function restoreNode() {
    const restore = removed.pop();

    const prevNode = restore.prev;
    const nextNode = restore.next;

    if (prevNode) prevNode.next = restore;
    if (nextNode) nextNode.prev = restore;
  }
}
