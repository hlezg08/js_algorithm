function solution(n) {
  var answer = 0;
  let digit = n.toString().length;
  for (let i = digit - 1; i > 0; i--) {
    answer += parseInt(n / 10 ** i);
    n = n % 10 ** i;
  }
  answer += n;

  return answer;
}
