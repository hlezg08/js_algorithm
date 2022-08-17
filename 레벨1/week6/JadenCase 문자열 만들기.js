// 런타임 에러->공백 여러개일 때 예외 처리해서 통과
function solution(s) {
  s = s.toLowerCase();
  const new_s = s.split(" ");
  const answer = [];

  for (let el of new_s) {
    if (el !== "") {
      const capital = el[0].toUpperCase();
      el = el.substring(1, el.length);
      el = capital + el;
      answer.push(el);
    } else answer.push(el); // 공백일 때도 push
  }
  return answer.join(" ");
}
