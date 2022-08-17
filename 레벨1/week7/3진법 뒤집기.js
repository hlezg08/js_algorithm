function solution(n) {
  var answer = 0;
  n = n.toString(3);
  n = n
    .toString()
    .split("")
    .reverse()
    .map((e) => Number(e))
    .join("");
  answer = parseInt(n, 3);
  return answer;
}
