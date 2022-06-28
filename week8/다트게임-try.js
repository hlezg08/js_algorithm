// 옵션 (*,#) 조건 처리 미완성
function solution(dartResult) {
  let answer = 0;
  for (let i = 1; i < dartResult.length; i++) {
    let number = Number(dartResult[i - 1]);
    if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") number = 10;
    if (dartResult[i] === "S") answer += number;
    if (dartResult[i] === "D") answer += number ** 2;
    if (dartResult[i] === "T") answer += number ** 3;

    // if (dartResult[i] === "#") {
    //   answer += Number(dartResult[i - 2]) * -1;
    // }
    // if (dartResult[i] === "*") {
    //   if (i === 2) answer += Number(dartResult[i - 2]) * 2;
    //   else answer += Number(dartResult[i - 2]) * 2;
    // }
  }
  return answer;
}
