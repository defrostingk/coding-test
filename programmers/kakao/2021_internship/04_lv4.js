const n = 3;
const start = 1;
const end = 3;
const roads = [
  [1, 2, 2],
  [3, 2, 3],
];
const traps = [2];

console.log(solution(n, start, end, roads, traps));

function solution(n, start, end, roads, traps) {
  class Node {
    constructor(num, weight) {
      this.num = num;
      this.weight = weight;
    }
  }
  const adjList = {};

  roads.forEach((edge) => {
    const [from, to, weight] = edge;
    const newNode = new Node(to, weight);
    if (adjList[from]) adjList[from].push(newNode);
    else adjList[from] = [newNode];
  });

  console.log(adjList);

  var answer = 0;
  return answer;
}
