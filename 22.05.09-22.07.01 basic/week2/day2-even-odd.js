function solution(num) {
  var answer = "";
  if (num % 2 === 0) answer = "Even";
  else answer = "Odd";

  //한 줄로도 해결 가능(삼항 연산자 이용)
  //return (num%2===0) ? "Even" : "Odd";
  return answer;
}
