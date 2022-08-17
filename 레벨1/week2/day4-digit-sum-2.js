function solution(n) {
  let answer = 0;
  n = String(n);
  n = n.split("");

  let n_arr = n.map((e) => Number(e));

  for (let num of n_arr) {
    answer += num;
  }
  //좀더 간단하게 풀기
  // for(let i=0;i<n.length;i++){
  //   answer+=Number(n[i]);
  // }

  //reduce로 더 간단하게 풀기
  //const answer=String(n).split("").reduce((acc,cur)=>{return Number(acc)+Number(cur)},0);

  return answer;
}
