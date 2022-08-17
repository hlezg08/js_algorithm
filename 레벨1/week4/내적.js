function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;

  //reduce 메소드 사용하는 법
  //   return a.reduce((acc,cur,i)=>{
  //     return acc+(cur*b[i])
  // },0)
}
