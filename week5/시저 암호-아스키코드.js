function solution(s, n) {
  let answer = "";
  s = s.split(" ");
  const z_code = "z".charCodeAt();
  const Z_code = "Z".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      let code = s[i].charCodeAt(j);

      if (code + n > z_code || (code + n > Z_code && code <= Z_code))
        answer += String.fromCharCode(code + n - 26);
      else answer += String.fromCharCode(code + n);
    }
    // 다음 문자로 넘어갈 때 공백 출력
    if (i !== s.length - 1) answer += " ";
  }
  return answer;
}
