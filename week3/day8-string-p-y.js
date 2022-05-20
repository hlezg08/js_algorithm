function solution(s) {
  var answer = true;
  s = s.toLowerCase();
  let p_cnt = 0;
  let y_cnt = 0;
  for (let key of s) {
    if (key === "p") p_cnt++;
    if (key === "y") y_cnt++;
  }
  if (p_cnt !== y_cnt) answer = false;

  return answer;
}
