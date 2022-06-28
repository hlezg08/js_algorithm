function solution(dartResult) {
  // 숫자로 선언하지 말고 배열로 하면 편함
  let answer = [];
  for (let i = 1; i < dartResult.length; i++) {
    let number = Number(dartResult[i - 1]);
    if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") number = 10;
    if (dartResult[i] === "S") answer.push(number);
    if (dartResult[i] === "D") answer.push(number ** 2);
    if (dartResult[i] === "T") answer.push(number ** 3);

    if (dartResult[i] === "#") answer[answer.length - 1] *= -1;
    if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      if (answer.length > 1) answer[answer.length - 2] *= 2;
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}
