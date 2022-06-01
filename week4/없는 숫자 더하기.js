function solution(numbers) {
  var answer = [];
  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) {
      answer.push(i);
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}
