// 아스키코드는 대문자<소문자
function solution(s, n) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let code = s[i].charCodeAt() + n;

    // 소문자 z 범위나 대문자 Z 범위를 초과하면서
    // 기존의 유니코드 번호(code-n)가 대문자일 경우
    if (code > 122 || (code > 90 && code - n < 97)) {
      code -= 26;
    }
    answer += String.fromCharCode(code);
  }
  return answer;
}
