function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  //효율성 훨씬 좋음
  // var answer = n;
  // for(let i=1;i<=n/2;i++){
  //     if(n%i===0)
  //         answer+=i;
  // }

  //reduce 메소드 이용
  // const answer=new Array(n).fill(1).reduce((acc,cur,i)=>{
  //   const num=cur+i;
  //   return acc+(n%num===0?num:0)
  // },0);

  return answer;
}
