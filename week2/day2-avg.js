function solution(arr) {
  var answer = 0;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  answer = sum / arr.length;
  return answer;
}
