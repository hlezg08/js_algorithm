function solution(seoul) {
  let idx;
  var answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      idx = i;
    }
  }
  answer = "김서방은 " + idx + "에 있다";
  return answer;
}
