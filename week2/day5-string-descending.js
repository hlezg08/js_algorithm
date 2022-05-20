function solution(s) {
  let answer = "";
  s = s.split("");
  answer = s.sort().reverse().join("");

  return answer;
}
