const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else {
      const word = lowerCase.includes(s[i]) ? lowerCase : upperCase;
      let idx = word.indexOf(s[i]) + n;
      if (idx >= 26) idx -= 26;
      answer += word[idx];
    }
  }
  return answer;
}
