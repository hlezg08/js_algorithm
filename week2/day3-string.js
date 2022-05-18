function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;

  //다른 방법: filter 이용: 문자열 하나씩 자른다음, filter로 NaN인 문자만 남기기
  //const answer=s.split("").filter((el)=>isNaN(el));
  //NaN인 문자가 하나도 없을 때 true를 반환, 그렇지 않으면 false 반환
  //return answer.length===0
}
//처음에 내가 풀었던 방법
// function solution(s) {
//   var answer = true;
//   if ((s.length !== 4 && s.length !== 6) || isNaN(s)) answer = false;

//   //지수 표기법(ex: '3e09')도 예외 처리
//   if (s.includes("e")) answer = false;
//   return answer;
// }
