function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    if (isNaN(s)) answer = false;

    //지수 표기법(ex: '3e09')도 예외 처리
    if (s.includes("e")) answer = false;
  } else answer = false;
  return answer;
}
