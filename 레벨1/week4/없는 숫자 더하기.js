function solution(numbers) {
  var answer = [];
  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) {
      answer.push(i);
    }
  }
  return answer.reduce((acc, cur) => acc + cur);

  //다른 방법
  //   return new Array(9).fill(1).reduce((acc,cur,i)=>{
  //     const num=cur+i
  //     return acc+(numbers.includes(num)?0:num)
  // },0)
}
