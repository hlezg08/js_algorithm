function solution(s) {
  let answer = "";
  s = s.split("");
  answer = s.sort().reverse().join("");

  //다른 방법
  // s=s.split("");
  // s.sort((a,b)=>a<b?1:-1); //내림차순 정렬
  // answer=s.join("");
  return answer;
}
