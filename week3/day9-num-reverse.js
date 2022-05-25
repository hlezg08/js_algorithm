function solution(n) {
  var answer = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  answer.reverse();
  return answer;

  //인덱스를 감소시켜서 거꾸로 넣는 방법
  // var answer = [];
  // n=String(n)
  // for(let i=n.length-1;i>=0;i--){
  //     answer.push(Number(n[i]))
  // }
  // return answer;

  //reverse 이용해서 한 줄로 해결한 방법
  //return n.toString().split("").reverse().map(e=>Number(e))
}
