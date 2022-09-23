// 예시 1
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

function dfs(graph, node, visited) {
  visited[node] = true;
  result.push(node);
  for (let element of graph[node]) {
    if (!visited[element]) {
      dfs(graph, element, visited);
    }
  }
}

function solution() {
  dfs(graph, 1, visited);
  return 'DFS 탐색 순서:' + result;
}
console.log(solution());
