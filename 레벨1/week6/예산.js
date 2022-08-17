// 처음 풀었던 방법
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (1) {
    let sum = d.reduce((acc, cur) => acc + cur, 0);
    if (sum > budget) d.pop();
    else return d.length;
  }
}
