function solution(arr, divisor) {
  var answer = [];

  for (let num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);

  return answer;

  //filter 이용해서 한 줄로 해결
  // const answer=arr.filter(num=>num%divisor===0)
  // return answer.length===0?[-1]:answer.sort((a,b)=>a-b)
}
