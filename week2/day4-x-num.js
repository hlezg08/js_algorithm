function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  //map 이용해서 간단하게 풀기
  //const answer = new Array(n).fill(1).map((num, idx) => (num + idx) * x);
  return answer;
}
