const bonus = ["S", "D", "T"];
function solution(dartResult) {
  let answer = []; // 숫자로 선언하지 말고 배열로 하면 편함
  for (let i = 1; i < dartResult.length; i++) {
    let number = Number(dartResult[i - 1]);
    if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") number = 10;

    // 보너스(S,D,T) 점수 계산
    if (bonus.includes(dartResult[i])) {
      const pow = bonus.indexOf(dartResult[i]) + 1;
      answer.push(number ** pow);
    }

    // 옵션 점수 계산
    if (dartResult[i] === "#") answer[answer.length - 1] *= -1;
    if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      if (answer.length > 1) answer[answer.length - 2] *= 2;
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}
