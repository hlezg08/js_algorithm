function solution(s) {
  var answer = "";
  let middle = parseInt(s.length / 2);
  if (s.length % 2 === 1) {
    answer = s[middle];
  } else {
    answer += s[middle - 1];
    answer += s[middle];
  }
  return answer;
}
