function solution(absolutes, signs) {
  var answer = 123456789;
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      absolutes[i] = -absolutes[i];
    }
  }

  answer = absolutes.reduce((acc, cur) => acc + cur);
  return answer;
}
