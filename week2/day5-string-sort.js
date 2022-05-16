function solution(s) {
  let answer = "";
  s = s.split("");
  s = s.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  answer = s.join("");

  return answer;
}
