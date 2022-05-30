function solution(x) {
  var answer = true;
  let arr = String(x)
    .split("")
    .map((e) => Number(e));
  let digit = 0;
  for (let num of arr) {
    digit += num;
  }
  if (x % digit !== 0) answer = false;
  return answer;
}
