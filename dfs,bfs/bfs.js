const graph = [
  [],
  [2, 3],
  [1, 3, 4, 5],
  [1, 2, 6, 7],
  [2, 5],
  [2, 4],
  [3, 7],
  [3, 6],
];
// 예시 2
// const graph2 = [
//   [],
//   [2, 3, 8],
//   [1, 7],
//   [1, 4, 5],
//   [3, 5],
//   [3],
//   [7],
//   [2, 6, 8],
//   [1, 7],
// ];
const visited = new Array(graph.length).fill(false);
const result = [];

function bfs(graph, node, visited) {
  const queue = [node];
  visited[node] = true;

  while (queue.length > 0) {
    let pop = queue.shift();
    result.push(pop);
    for (let el of graph[pop]) {
      if (!visited[el]) {
        queue.push(el);
        visited[el] = true;
      }
    }
  }
}
function solution() {
  bfs(graph, 1, visited);
  return 'BFS 탐색 순서:' + result;
}
console.log(solution());
