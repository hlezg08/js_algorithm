function solution(x) {
  let arr = String(x)
    .split("")
    .map((e) => Number(e));
  let digit = 0;
  for (let num of arr) {
    digit += num;
  }
  return x % digit === 0;

  //간단하게 리팩토링
  // let digit=String(x).split("").reduce((acc,cur)=>{
  //   return acc+Number(cur)
  // },0)
  // return x%digit===0;
}
