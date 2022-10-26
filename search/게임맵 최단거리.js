const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(array, x, y) {
  const n = array.length;
  const m = array[0].length;
  let queue = [];
  queue.push([x, y]);
  while (queue.length > 0) {
    let [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (array[nx][ny] === 0) continue;
      if (array[nx][ny] === 1) {
        array[nx][ny] = array[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return array[n - 1][m - 1] === 1 ? -1 : array[n - 1][m - 1];
}

function solution(maps) {
  return bfs(maps, 0, 0);
}
