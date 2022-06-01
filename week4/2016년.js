function solution(a, b) {
  var answer = "";
  const date = new Date(`2016-${a}-${b}`).toString();
  answer = date.slice(0, 3).toUpperCase();
  return answer;
}
