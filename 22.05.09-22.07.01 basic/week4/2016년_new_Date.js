// 처음에 제출한 답안 : new Date 객체 이용
// function solution(a, b) {
//   var answer = "";
//   const date = new Date(`2016-${a}-${b}`).toString();
//   answer = date.slice(0, 3).toUpperCase();
//   return answer;
// }

// 풀고나서 참고한 답안
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days % 7];
}
